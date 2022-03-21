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
        return this.$store.state.quickAll.sl_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_a", value);
      },
    },
    question_a: {
      get() {
        return this.$store.state.quickAll.question_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_a", value);
      },
    },
  },
};
</script>

<style scoped></style>
