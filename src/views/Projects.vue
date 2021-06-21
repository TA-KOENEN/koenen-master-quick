<template>
  <v-main>
    <navigation />
    <toolbar />
  </v-main>
</template>

<script>
import Navigation from "@/components/core/Navigation";
import Toolbar from "@/components/core/Toolbar";
export default {
  name: "Projects",
  components: { Toolbar, Navigation },
};
</script>

<style scoped></style>
