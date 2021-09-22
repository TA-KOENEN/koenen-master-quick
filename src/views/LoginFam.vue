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

        <v-card-title class="white--text">Familiecode</v-card-title>
        <v-card-text class="white--text"
          >In uw email uitnodiging treft u een familiecode aan. Met deze code
          krijgt u toegang.<br />

          <br />
          Controleer eventueel uw spambox.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <v-card-text>
        <v-row>
          <v-text-field
            outlined
            shaped
            placeholder="Familiecode"
            v-model="familyCode"
            required
          />
        </v-row>
        <v-row>
          <flash-message :error="error" v-if="error" key="error" />
        </v-row>
        <div class="text-end mt-5 mr-15">
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
  name: "LoginFam",
  components: { FlashMessage },
  data() {
    return {
      error: null,
      familyCode: null,
      valid: false,
      errorBtn: false,
    };
  },
  methods: {
    startOver() {
      this.$router.push({ name: "LoginFam" });
    },
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async login() {
      let data = {
        token: this.familyCode,
      };
      this.error = null;
      try {
        await this.$store.dispatch("auth/loginFam", data);
        if (this.stepFamily) {
          this.$router.push({ name: "Intro" });
        } else {
          console.log("error");
          this.errorBtn = true;
          const error = Error(
            "Deze familiecode is onjuist of verlopen, probeer het a.u.b opnieuw. Mocht u problemen blijven ondervinden dan verzoeken we contact met ons op te nemen. This family code is incorrect or expired, please try again. If you continue to have problems, please contact us."
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
    ...mapGetters("auth", ["stepFamily"]),
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
