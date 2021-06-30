<template>
  <v-row no-gutters>
    <v-col cols="12" md="6" class="primary d-flex justify-center align-center">
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
    <v-col cols="12" md="6" class="justify-center align-center">
      <div class="ma-5 pa-0">
        <vimeo-player
          :video-id="vimeo.intro"
          class="embed-container"
          :options="{ responsive: true }"
        ></vimeo-player>
        Beste betrokkene bij {{ companyName }} <br />

        Binnenkort starten wij.. met de knop gaat u naar het persoonlijke
        inlog...

        Mocht u vragen hebben....

        {{ firstNameUser }} {{ lastNameUser }}

        <div class="text-end mr-15">
          <v-btn
            elevation="15"
            class="primary"
            @click="start"
            :disabled="!valid"
            :class="{ 'primary white--text': valid, disabled: !valid }"
            >Verder</v-btn
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import vimeoData from "@/text/vimeo.json";

export default {
  name: "Intro",
  data() {
    return {
      companyName: null,
      firstNameUser: null,
      lastNameUser: null,
      valid: true,
      vimeo: vimeoData,
    };
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    start() {
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.companyName = JSON.parse(localStorage.getItem("companyName"));
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
