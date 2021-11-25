<template>
  <div>
    <v-checkbox color="info" :label="label" v-model="innerValue" />
  </div>
</template>

<script>
export default {
  name: "BaseCheck",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      default: "",
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
