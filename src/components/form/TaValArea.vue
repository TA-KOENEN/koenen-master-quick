<template>
  <ValidationProvider
    :name="$attrs.label"
    :rules="rules"
    v-slot="{ errors, valid }"
  >
    <div class="mt-5" />
    <h4 class="primary--text">{{ textA }}</h4>
    <v-textarea
      v-model="innerValue"
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
      :success="valid"
      outlined
      shaped
      rows="5"
      class="mt-5"
    ></v-textarea>
  </ValidationProvider>
</template>

<script>
export default {
  name: "TaValArea",
  components: {},
  props: {
    rules: {
      type: [Object, String],
      default: "",
    },
    // must be included in props
    value: {
      type: null,
    },
    textA: {
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
