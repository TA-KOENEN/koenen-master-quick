<template>
  <div>
    <v-row class="ma-16">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-img
          :src="
            require(`@/assets/core/logo_${
              $vuetify.theme.dark ? 'light' : 'dark'
            }.png`)
          "
          max-height="500px"
        />
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <h3>Welkom bij Koenen en Co</h3>
    </v-row>
    <v-row class="justify-center mt-10">
      <h5>Liever een ander kleurschema klik op de knop</h5></v-row
    >
    <v-row class="justify-center mt-10">
      <div class="text-center">
        <v-btn class="secondary mb-10" @click="toggle_dark_mode">
          <v-icon left>mdi-theme-light-dark</v-icon>
          <span>Donker/Licht</span>
        </v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TaLeftIntroScreen",
  methods: {
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>

<style scoped></style>
