<template>
  <div>
    <v-toolbar dark :src="require('@/assets/core/alleenlijn.jpg')">
      <v-toolbar-title class="ml-15">Familiestatuut app</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn x-small outlined @click="logout">Logout</v-btn>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-toolbar>
    <report />
  </div>
</template>

<script>
import Report from "@/components/core/report";
export default {
  name: "Toolbar",
  components: { Report },
  data() {
    return {
      theme: null,
    };
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("tokkie");
      localStorage.removeItem("lastNameUser");
      localStorage.removeItem("firstNameUser");
      localStorage.removeItem("companyName");
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
};
</script>
<style scoped></style>
