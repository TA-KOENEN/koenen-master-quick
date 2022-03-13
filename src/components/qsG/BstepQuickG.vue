<template>
  <div>
    {{ question_a }}
    <base-val-area
      v-model="question_a"
      :textA="'Welke wijzigingen mogen doorgevoerd worden?'"
      :rules="'required|max:200'"
      :label="'Wijzigingen'"
    />
    <ta-slider-feeling v-model="sl_a" />
  </div>
</template>

<script>
export default {
  name: "BstepQuickG",
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
  methods: {},
};
</script>

<style scoped></style>
