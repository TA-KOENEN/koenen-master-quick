<template>
  <v-btn color="info" x-large @click="onClick" :disabled="disabled">
    <slot>Rapportage</slot>
  </v-btn>
</template>

<script>
export default {
  name: "BtnReport",
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
