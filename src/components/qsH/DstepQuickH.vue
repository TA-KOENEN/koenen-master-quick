<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[4].label"
      v-model="question_d"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[4].nrOptions"
      :optionA="statTextMulti[4].optionA"
      :optionB="statTextMulti[4].optionB"
      :optionC="statTextMulti[4].optionC"
      :optionD="statTextMulti[4].optionD"
      :optionE="statTextMulti[4].optionE"
      :optionF="statTextMulti[4].optionF"
      :optionG="statTextMulti[4].optionG"
    />
  </div>
</template>

<script>
export default {
  name: "CstepQuickH",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_d: {
      get() {
        return this.$store.state.quickH.question_d;
      },
      set(value) {
        this.$store.commit("quickH/update_question_d", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
