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

        <br />
        Beste betrokkene bij {{ companyName }} <br /><br />

        Mijn naam is {{ firstNameUser }} {{ lastNameUser }} en namens Trusted
        Accountant begeleid ik de familie {{ companyName }} bij het beschrijven
        van het Familiestatuut.<br />
        <br />

        U bent uitgenodigd om aan de familiebijeenkomsten deel te nemen.
        Voorafgaand aan elke familiebijeenkomst vragen wij alle deelnemers om
        input over bepaalde perspectieven op het familiebedrijf.
        <br />

        <br />
        Met de Familiestatuut App bieden wij u de mogelijkheid om uw input te
        geven aan de hand van een gestructureerde vragenlijst. Uw input geeft
        ons een beter begrip van uw visie op de toekomst van het familiebedrijf
        en de rol van de familie hierbij. Samen met de visie van de andere
        deelnemers hebben we een compleet beeld van de wensen en verwachtingen.
        Hierdoor kunnen we in de familiebijeenkomsten gerichter toewerken naar
        het vastleggen van de afspraken die de familie wil maken.
        <br />
        Op de volgende pagina komt u in uw persoonlijke deel van de
        Familiestatuut App die wij voor u hebben klaargezet.
        <br />
        <br />

        U kunt de Familiestatuut App in uw eigen tijd en tempo doornemen en
        invullen. Voor elke volgende familiebijeenkomst zullen er nieuwe modules
        voor u worden klaargezet. Heeft u vragen of opmerkingen over de
        Familiestatuut App, dan kunt u mij bereiken op onderstaande
        contactgegevens. <br />
        <br />Alvast dank en tot de volgende familiebijeenkomst.<br />
        Met vriendelijke groet,<br />
        <br />
        <br />
        {{ firstNameUser }} {{ lastNameUser }}<br />
        <br />

        <h5>
          TrustedAccountant
          <br />

          {{ firstNameUser }} {{ lastNameUser }}<br />
          e-mail {{ emailUser }}<br />
          telefoon: {{ telephoneUser }} <br />
        </h5>
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
      emailUser: null,
      telephoneUser: null,
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
    this.emailUser = JSON.parse(localStorage.getItem("emailUser"));
    this.telephoneUser = JSON.parse(localStorage.getItem("telephoneUser"));
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
