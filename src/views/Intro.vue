<template>
  <div>
    <not-int />
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="primary d-flex justify-center align-center"
      >
        <v-card outlined class="transparent">
          <v-card-text>
            <v-img
              :src="
                require(`@/assets/core/logo_${
                  $vuetify.theme.dark ? 'light' : 'dark'
                }.png`)
              "
              height="200vh;"
              max-height="1200px"
            />
          </v-card-text>

          <v-card-title> Welkom bij Trusted Accountant</v-card-title>
          <v-card-text
            >Liever een ander kleurschema klik op de knop</v-card-text
          >
          <div class="text-center">
            <v-btn class="secondary" @click="toggle_dark_mode">
              <v-icon left>mdi-theme-light-dark</v-icon>
              <span>Donker/Licht</span>
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="justify-center align-center">
        <div class="ma-5 pa-0">
          <vimeo-player
            :video-id="vimeo.intro"
            class="embed-container"
            :options="{ responsive: true }"
          ></vimeo-player>

          <br />
          <div v-if="formal">
            Beste {{ firstNameClient }} {{ lastNameClient }},<br /><br />

            Hier moet nog een tekst komen!<br />
            <br />

            Op de volgende pagina komt u in uw persoonlijke deel van de

            <br />
            <br />

            Heeft u vragen of opmerkingen over deze Quick Scan, dan kunt u mij
            bereiken. Mijn contactgegevens zijn te vinden in de uitnodigingsmail
            voor deze QuickScan <br />
            <br />

            Met vriendelijke groet,<br />
            <br />
            <br />
            {{ firstNameUser }} {{ lastNameUser }}<br />
            <br />
          </div>
          <div v-if="!formal">
            Beste {{ firstNameClient }} ,<br /><br />

            Hier moet nog een tekst komen )informeel!<br />
            <br />

            Op de volgende pagina komt u in uw persoonlijke deel van de

            <br />
            <br />

            Heeft u vragen of opmerkingen over deze QuickScan, dan kunt u mij
            bereiken. Mijn contactgegevens zijn te vinden in de uitnodigingsmail
            voor deze QuickScan <br />
            <br />

            Met vriendelijke groet,<br />
            <br />
            <br />
            {{ firstNameUser }} {{ lastNameUser }}<br />
            <br />
          </div>
          <div class="text-end mr-15">
            <v-btn elevation="15" class="primary" @click="start">Ja</v-btn>
            <v-btn elevation="15" class="ml-7 primary" @click="end">Nee</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vimeoData from "@/text/vimeo.json";
import AuthService from "@/services/AuthService";
import NotInt from "@/components/core/notInt";

export default {
  name: "Intro",
  components: { NotInt },
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
    };
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    start() {
      this.$router.push({ name: "Login" });
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
        await AuthService.notInt(payloadLog);
        localStorage.removeItem("clientId");
        localStorage.removeItem("firstNameClient");
        localStorage.removeItem("lastNameClient");
        localStorage.removeItem("emailClient");
        localStorage.removeItem("firstNameUser");
        localStorage.removeItem("lastNameUser");
        localStorage.removeItem("formal");
        this.$router.push({ path: "/Start" });
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

.height-col {
  height: 100vh;
}
</style>
