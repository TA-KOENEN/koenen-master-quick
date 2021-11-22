<template>
  <v-btn
    color="accent"
    small
    class="mb-5 mr-8"
    @click="onClick"
    :disabled="disabled"
  >
    <slot>Verder</slot>
  </v-btn>
</template>

<script>
export default {
  name: "BtnCont",
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
