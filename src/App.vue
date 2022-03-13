<template>
  <v-app ma="0" pa="0" class="achtergrond">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tokkie: null,
      quickId: null,
    };
  },
  created() {
    this.quickId = this.$route.query.quickId;
    localStorage.setItem("quickId", JSON.stringify(this.quickId));
    this.tokkie = this.$route.query.name;
    localStorage.setItem("tokkie", JSON.stringify(this.tokkie));
  },
};
</script>
<style>
html,
body {
  overflow-x: hidden;
}
.full-page {
  height: 250vh;
}
</style>
