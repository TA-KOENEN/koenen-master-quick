<template>
  <div>
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[5].label"
      v-model="question_e"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[5].nrOptions"
      :optionA="statTextMulti[5].optionA"
      :optionB="statTextMulti[5].optionB"
      :optionC="statTextMulti[5].optionC"
      :optionD="statTextMulti[5].optionD"
      :optionE="statTextMulti[5].optionE"
      :optionF="statTextMulti[5].optionF"
      :optionG="statTextMulti[5].optionG"
    />
  </div>
</template>

<script>
export default {
  name: "EstepQuickH",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_e: {
      get() {
        return this.$store.state.quickH.question_e;
      },
      set(value) {
        this.$store.commit("quickH/update_question_e", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
