<template>
  <div>
    <ta-statement :stat-text="statTextMulti[1]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[1].label"
      v-model="question_a"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[1].nrOptions"
      :optionA="statTextMulti[1].optionA"
      :optionB="statTextMulti[1].optionB"
      :optionC="statTextMulti[1].optionC"
      :optionD="statTextMulti[1].optionD"
      :optionE="statTextMulti[1].optionE"
      :optionF="statTextMulti[1].optionF"
      :optionG="statTextMulti[1].optionG"
    />
  </div>
</template>

<script>
export default {
  name: "AstepQuickH",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_a: {
      get() {
        return this.$store.state.quickH.question_a;
      },
      set(value) {
        this.$store.commit("quickH/update_question_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
