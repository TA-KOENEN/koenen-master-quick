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
            <v-btn class="secondary mb-10" @click="toggle_dark_mode">
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

            Veel ondernemers schatten het risico op het plotseling wegvallen als
            gevolg van een ziekte of ongeval laag in. Dat maakt dat ze weinig
            tot geen maatregelen nemen om hun onderneming en gezin tegen de
            impact hiervan te beschermen. Als uw adviseur vinden wij het
            belangrijk om het onderwerp Noodopvolging op de agenda te zetten.<br />
            <br />
            <br />
            Met deze app nodigen wij u uit een korte vragenlijst over
            noodopvolging voor uzelf in te vullen. Het vraagt circa 5 minuten
            van uw tijd. Na afloop heeft u de mogelijkheid om per e-mail een
            rapport te ontvangen met daarin een verdere toelichting aan de hand
            van uw antwoorden.
            <br />
            <br />
            U kunt de vragenlijst starten met de knop JA. In het volgende scherm
            wordt u gevraagd een persoonlijke inlogcode in te voeren. Inmiddels
            is deze persoonlijke inlogcode per e-mail aan u verstuurd.
            <br />
            Heeft u geen interesse in het invullen van de vragenlijst, dan kunt
            u de knop NEE gebruiken. U wordt dan automatisch uitgelogd uit de
            app.
            <br />
            Wilt u tijdens het invullen van de vragenlijst meer informatie? Bel
            mij gerust. Mijn contactgegevens treft u aan onderaan de e-mails die
            u zojuist hebt ontvangen. <br />
            <br />
            <br />
            Met vriendelijke groet,<br />
            <br />
            <br />
            {{ firstNameUser }} {{ lastNameUser }}<br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div v-if="!formal">
            Beste {{ firstNameClient }} ,<br /><br />

            Veel ondernemers schatten het risico op het plotseling wegvallen als
            gevolg van een ziekte of ongeval laag in. Dat maakt dat ze weinig
            tot geen maatregelen nemen om hun onderneming en gezin tegen de
            impact hiervan te beschermen. Als jouw adviseur vinden wij het
            belangrijk om het onderwerp Noodopvolging op de agenda te zetten.<br />
            <br />
            Met deze app nodigen wij je uit een korte vragenlijst over
            noodopvolging voor jezelf in te vullen. Het vraagt circa 5 minuten
            van je tijd. Na afloop heb je de mogelijkheid om per e-mail een
            rapport te ontvangen met daarin een verdere toelichting aan de hand
            van jouw antwoorden.
            <br />
            Je kunt de vragenlijst starten met de knop JA. In het volgende
            scherm wordt je gevraagd een persoonlijke inlogcode in te voeren.
            Inmiddels is deze persoonlijke inlogcode per e-mail aan je
            verstuurd.
            <br />
            Heb je geen interesse in het invullen van de vragenlijst, dan kun je
            de knop NEE gebruiken. Je wordt dan automatisch uitgelogd uit de
            app.<br />
            Wil je tijdens het invullen van de vragenlijst meer informatie? Bel
            mij gerust. Mijn contactgegevens tref je aan onderaan de e-mails die
            je zojuist hebt ontvangen.
            <br />
            <br />
            Met vriendelijke groet,<br />
            <br />
            <br />
            <br />
            <br />
            {{ firstNameUser }} {{ lastNameUser }}<br />
            <br />

            <br />
          </div>
          <div class="text-end mr-15 mb-10">
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
