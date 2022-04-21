<template>
  <div>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="leftPanel align-center"
        :class="{ 'full-page': $vuetify.breakpoint.mdAndUp }"
      >
        <ta-left-intro-screen />
      </v-col>
      <v-col cols="12" md="6" class="justify-center align-center">
        <ta-new-code />
        <v-row class="ml-15 mt-15 mr-15">
          <ta-security-code
            :formal="formal"
            :first-name-client="firstNameClient"
            :last-name-client="lastNameClient"
            v-model="securityCode"
          />
        </v-row>

        <div class="text-end mr-15 mb-10 mt-15">
          <ta-btn-new-code v-if="errorBtn" @onClick="newCode" />
          <ta-btn-cont @onClick="login" />
        </div>
        <v-row justify="center" class="ml-8 mr-8 mt-15">
          <flash-message :error="error" v-if="error" key="error" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getError } from "@/utils/helpers";
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import ResultService from "@/services/ResultService";

export default {
  name: "LoginFam",
  components: { FlashMessage },
  data() {
    return {
      firstNameClient: null,
      lastNameClient: null,
      emailClient: null,
      firstNameUser: null,
      lastNameUser: null,
      formal: true,
      error: null,
      securityCode: null,
      valid: false,
      errorBtn: false,
    };
  },
  methods: {
    async newCode() {
      console.log("gaat goed");
      const payload = {
        tokkie: JSON.parse(localStorage.getItem("tokkie")),
      };
      try {
        await ResultService.getNewCodeM(payload);
        // eslint-disable-next-line no-undef
        EventBus.$emit("newCode", true);
        this.error = null;
        this.errorBtn = false;
        this.securityCode = null;
      } catch (error) {
        this.error = getError(error);
      }
    },
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async login() {
      let payload = {
        email: this.emailClient,
        token: this.securityCode,
      };
      this.error = null;
      try {
        await this.$store.dispatch("auth/loginM", payload);
        if (this.stepTwo) {
          this.$router.push({ name: "index_m" });
        } else {
          this.errorBtn = true;
          const error = Error(
            "Deze toegangscode is onjuist of verlopen, probeer het a.u.b opnieuw. Mocht u problemen blijven ondervinden dan verzoeken wij contact met ons op te nemen. U kunt een nieuwe code opvragen met de knop NIEUWE CODE. Deze code is dan ook weer 30 minuten geldig."
          );
          error.name = "Fetch User";
          throw error;
        }
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
  mounted() {
    this.firstNameClient = JSON.parse(localStorage.getItem("firstNameClient"));
    this.lastNameClient = JSON.parse(localStorage.getItem("lastNameClient"));
    this.emailClient = JSON.parse(localStorage.getItem("emailClient"));
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },

  computed: {
    ...mapGetters("auth", ["stepTwo"]),
  },
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important; /* maybe !important  */
}
</style>
