<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      md="6"
      class="secondary d-flex justify-center align-center"
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

        <v-card-title class="white--text">Password</v-card-title>
        <v-card-text class="white--text"
          >U ontvangt een e-mailbericht met een zescijferige code. Deze vult u
          als password in. <br />
          Controleer eventueel uw spambox</v-card-text
        >
      </v-card>
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <v-card-text>
        <v-row>
          <v-text-field
            outlined
            shaped
            placeholder="password"
            v-model="password"
            required
          />
        </v-row>
        <v-row>
          <flash-message :error="error" v-if="error" key="error" />
        </v-row>
        <div class="text-end mt-5 mr-15">
          <v-btn class="mr-8" v-if="errorBtn" @click="startOver">nw code</v-btn>
          <v-btn elevation="15" class="primary" v-if="errorBtn" @click="login"
            >nogmaals</v-btn
          >
          <v-btn elevation="15" class="primary" v-if="!errorBtn" @click="login"
            >Verder</v-btn
          >
        </div>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
import { getError } from "@/utils/helpers";
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "LoginB",
  components: { FlashMessage },
  data() {
    return {
      error: null,
      password: null,
      valid: false,
      errorBtn: false,
    };
  },
  methods: {
    startOver() {
      this.$router.push({ name: "Login" });
    },
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async login() {
      let data = {
        email: this.email,
        token: this.password,
      };
      this.error = null;
      // axios.post("/loginchart", data, {
      //   headers: {
      //   },
      // });

      try {
        await this.$store.dispatch("auth/loginB", data);
        if (this.stepTwo) {
          localStorage.setItem("email", this.email);
          this.$router.push({ name: "Modules" });
        } else {
          console.log("error");
          this.errorBtn = true;
          const error = Error(
            "Dit wachtwoord is onjuist of verlopen, probeer het opnieuw of begin opnieuw U krijgt dan een een nieuw wachtwoord toegezonden."
          );
          error.name = "Fetch User";
          throw error;
        }
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
  mounted() {},
  computed: {
    ...mapGetters("auth", ["stepTwo", "email"]),
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
