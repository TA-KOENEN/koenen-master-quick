<template>
  <div class="mt-5">
    <v-textarea
      class="mt-5"
      outlined
      filled
      disabled
      v-model="innerValue"
      shaped
      :rules="[(v) => v.length <= 250 || 'U hebt maximaal 150 tekens']"
      :counter="250"
    >
    </v-textarea>
  </div>
</template>

<script>
export default {
  name: "RemarkStat",
  props: {
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: "",
  }),
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style scoped></style>
