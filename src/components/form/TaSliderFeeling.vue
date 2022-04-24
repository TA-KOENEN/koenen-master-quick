<template>
  <div class="mt-3">
    <v-slider
      prop="value"
      v-model="joho"
      :value="value"
      :color="color"
      always-dirty
      min="-100"
      max="100"
      step="5"
      thumb-label="always"
      :thumb-color="color"
      class="mt-10"
    >
      <template v-slot:append>
        <v-icon color="secondary">mdi-plus-circle-outline</v-icon>
      </template>
      <template v-slot:prepend>
        <v-icon color="primary">mdi-minus-circle-outline</v-icon>
      </template>
    </v-slider>

    <v-row class="mt-0 mb-2">
      <v-col :cols="4"
        ><div class="caption primary--text text-left">
          Helemaal mee oneens
        </div></v-col
      >
      <v-col :cols="4"></v-col>
      <v-col :cols="4"
        ><div class="caption secondary--text text-right">
          Helemaal mee eens
        </div></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TaSliderFeeling",
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
      if (this.value < 0) return "primary";
      if (this.value > 0) return "secondary";
      return "secondary";
    },
  },
};
</script>

<style scoped></style>
