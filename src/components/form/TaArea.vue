<template>
  <v-textarea
    v-model="innerValue"
    outlined
    shaped
    rows="5"
    class="mt-5"
    label="label"
  ></v-textarea>
</template>

<script>
export default {
  name: "TaArea",
  props: {
    // must be included in props
    value: {
      type: null,
    },
    textA: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    innerValue: "",
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style scoped></style>
