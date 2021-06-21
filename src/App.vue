<template>
  <v-app ma="0" pa="0" class="achtergrond">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style>
html,
body {
  overflow-x: hidden;
}
</style>
