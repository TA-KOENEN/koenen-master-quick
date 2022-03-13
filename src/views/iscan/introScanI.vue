<template>
  <div>
    <ta-not-interested />
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="leftPanel align-center"
        :class="{ 'full-page': $vuetify.breakpoint.mdAndUp }"
      >
        <ta-left-intro-screen />
      </v-col>
      <v-col cols="12" md="6">
        <div class="ma-5 pa-0">
          <ta-right-info
            :vimeo-code="vimeo.scanC"
            :first-name-client="firstNameClient"
            :last-name-client="lastNameClient"
            :first-name-user="firstNameUser"
            :last-name-user="lastNameUser"
            :formal="formal"
            :text-data="textData"
          />

          <div class="text-end mr-15 mb-10 mt-15">
            <ta-btn-yes :on-click="start" />
            <ta-btn-no :on-click="end" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vimeoData from "@/text/vimeo.json";
import AuthService from "@/services/AuthService";
import textData from "@/text/scanI/textIintro.json";
import TaRightIntroScreen from "@/components/start/TaRightIntroScreen";
export default {
  name: "Intro",
  components: {
    "ta-right-info": TaRightIntroScreen,
  },
  data() {
    return {
      companyName: null,
      firstNameUser: null,
      lastNameUser: null,
      firstNameClient: null,
      lastNameClient: null,
      formal: true,
      valid: true,
      vimeo: vimeoData,
      textData: textData,
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    start() {
      this.$router.push({ name: "login_i" });
    },
    async end() {
      // eslint-disable-next-line
      console.log("stop");
      const payloadLog = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
      };
      try {
        // eslint-disable-next-line no-undef
        await EventBus.$emit("notInt", true);
        await this.sleep(3000);
        await AuthService.notIntI(payloadLog);
        localStorage.clear();
        this.$router.push({ name: "Eind" });
      } catch (error) {
        // eslint-disable-next-line no-undef
        EventBus.$emit("errNotInt", true);
      }
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.firstNameClient = JSON.parse(localStorage.getItem("firstNameClient"));
    this.lastNameClient = JSON.parse(localStorage.getItem("lastNameClient"));
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
  computed: {},
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important; /* maybe !important  */
}
</style>
