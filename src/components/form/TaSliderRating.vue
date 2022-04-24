<template>
  <div class="mt-3">
    <v-slider
      prop="value"
      v-model="joho"
      :value="value"
      :color="color"
      always-dirty
      min="0"
      max="10"
      step="1"
      thumb-label="always"
      :thumb-color="color"
      class="mt-10"
    >
      <template v-slot:append>
        <v-icon color="primary">mdi-plus-circle-outline</v-icon>
      </template>
      <template v-slot:prepend>
        <v-icon color="secondary">mdi-minus-circle-outline</v-icon>
      </template>
    </v-slider>
  </div>
</template>

<script>
export default {
  name: "TaSliderRating",
  props: {
    value: null,
  },
  data() {
    return {};
  },

  computed: {
    joho: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },

    color() {
      if (this.value < 5) return "secondary";
      if (this.value > 5) return "primary";
      return "secondary";
    },
  },
};
</script>

<style scoped></style>
