<template>
  <div>
    <ta-statement :stat-text="statTextMulti[9]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[9].label"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[9].nrOptions"
      :optionA="statTextMulti[9].optionA"
      :optionB="statTextMulti[9].optionB"
    />
    <ta-statement :stat-text="statTextMulti[10]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[10].label"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[10].nrOptions"
      :optionA="statTextMulti[10].optionA"
      :optionB="statTextMulti[10].optionB"
    />
  </div>
</template>

<script>
export default {
  name: "CstepQuickJ",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_b: {
      get() {
        return this.$store.state.quickJ.question_b;
      },
      set(value) {
        this.$store.commit("quickJ/update_question_b", value);
      },
    },
    question_c: {
      get() {
        return this.$store.state.quickJ.question_c;
      },
      set(value) {
        this.$store.commit("quickJ/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
