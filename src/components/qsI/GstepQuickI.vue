<template>
  <div>
    <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[7].label"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[7].nrOptions"
      :optionA="statTextMulti[7].optionA"
      :optionB="statTextMulti[7].optionB"
    />
  </div>
</template>

<script>
export default {
  name: "GstepQuickI",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_c: {
      get() {
        return this.$store.state.quickI.question_c;
      },
      set(value) {
        this.$store.commit("quickI/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
