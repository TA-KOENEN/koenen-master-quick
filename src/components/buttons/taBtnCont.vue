<template>
  <v-btn color="primary" small class="mb-5 mr-8" @click="$emit('onClick')">
    <slot>Verder</slot>
  </v-btn>
</template>

<script>
export default {
  name: "taBtnCont",
};
</script>

<style scoped></style>
