<template>
  <div>
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-radio
      v-model="question_a"
      :label="statTextMulti[2].label"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[2].nrOptions"
      :optionA="statTextMulti[2].optionA"
      :optionB="statTextMulti[2].optionB"
      :optionC="statTextMulti[2].optionC"
      :name="question_a"
    />

    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-radio
      v-model="question_b"
      :label="statTextMulti[3].label"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[3].nrOptions"
      :optionA="statTextMulti[3].optionA"
      :optionB="statTextMulti[3].optionB"
      :optionC="statTextMulti[3].optionC"
      :name="question_b"
    />
  </div>
</template>

<script>
export default {
  name: "BstepquickE",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_b: {
      get() {
        return this.$store.state.quickE.question_b;
      },
      set(value) {
        this.$store.commit("quickE/update_question_b", value);
      },
    },
    question_a: {
      get() {
        return this.$store.state.quickE.question_a;
      },
      set(value) {
        this.$store.commit("quickE/update_question_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
