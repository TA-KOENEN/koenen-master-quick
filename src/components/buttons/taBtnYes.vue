<template>
  <v-btn
    color="primary"
    small
    class="mb-5 mr-8"
    @click="onClick"
    :disabled="disabled"
  >
    <slot>Ja</slot>
  </v-btn>
</template>

<script>
export default {
  name: "taBtnYes",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped></style>
