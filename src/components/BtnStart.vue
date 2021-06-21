<template>
  <v-btn color="accent" small class="mb-5 mr-8" @click="onClick">
    <slot>Start</slot>
  </v-btn>
</template>

<script>
export default {
  name: "knopterug",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
