<template>
  <v-main>
    <navigation />
    <toolbar />
  </v-main>
</template>

<script>
import Toolbar from "@/components/core/Toolbar";
import Navigation from "@/components/core/Navigation";
export default {
  name: "Consultants",
  components: { Navigation, Toolbar },
};
</script>

<style scoped></style>
