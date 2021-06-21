<template>
  <v-row no-gutters>
    <v-col sm="12" md="6" class="primary d-flex justify-center align-center">
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
        <v-card-text>Liever een ander kleurschema klik op de knop</v-card-text>
        <div class="text-center">
          <v-btn class="secondary" @click="toggle_dark_mode">
            <v-icon left>mdi-theme-light-dark</v-icon>
            <span>Donker/Licht</span>
          </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col sm="12" md="6" class="d-flex justify-center align-center">
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <v-text-field
            outlined
            shaped
            placeholder="email"
            v-model="email"
            required
            :rules="emailRules"
          />
          <div class="text-end mr-15">
            <v-btn
              elevation="15"
              class="primary"
              @click="login"
              :disabled="!valid"
              :class="{ 'primary white--text': valid, disabled: !valid }"
              >Verder</v-btn
            >
          </div>
        </v-form>
        <flash-message :error="error" v-if="error" key="error" />
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
// import { mapGetters } from "vuex";
// import { getError } from "@/utils/helpers";
import FlashMessage from "@/components/FlashMessage";
import { getError } from "@/utils/helpers";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: { FlashMessage },
  data() {
    return {
      error: null,
      valid: false,
      theme: null,
      email: null,
      emailRules: [
        (v) => !!v || "E-mail is verplicht",
        // eslint-disable-next-line no-useless-escape
        (v) =>
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
            v
          ) || "Dit lijkt geen goed email adres",
      ],
    };
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async login() {
      let data = {
        email: this.email,
      };
      this.error = null;
      // axios.post("/loginchart", data, {
      //   headers: {
      //   },
      // });

      try {
        await this.$store.dispatch("auth/loginA", data);
        if (this.stepOne) {
          this.$store.commit("auth/SET_EMAIL", this.email);
          this.$router.push({ name: "LoginB" });
          console.log("stap1 af");
        } else {
          console.log("error");
          const error = Error("Dit email adres lijkt niet geheel te kloppen");
          error.name = "Fetch User";
          throw error;
        }
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
  computed: {
    ...mapGetters("auth", ["stepOne"]),
  },
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
