<template>
  <div>
    {{ sl_a }}
    <ta-slider-feeling v-model="sl_a" />
  </div>
</template>

<script>
export default {
  name: "CstepQuickG",
  props: ["statTextMulti"],
  data() {
    return {};
  },
  computed: {
    sl_a: {
      get() {
        return this.$store.state.quick.sl_a;
      },
      set(value) {
        this.$store.commit("quick/update_sl_a", value);
      },
    },
    question_a: {
      get() {
        return this.$store.state.quick.question_a;
      },
      set(value) {
        this.$store.commit("quick/update_question_a", value);
      },
    },
  },
};
</script>

<style scoped></style>
