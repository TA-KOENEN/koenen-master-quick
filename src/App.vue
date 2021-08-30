<template>
  <v-app ma="0" pa="0" class="achtergrond">
    <transition
      enter-active-class="animate__animated animate__slideInDown"
      appear
    />
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tokkie: null,
    };
  },
};
</script>
<style>
html,
body {
  overflow-x: hidden;
}
</style>
