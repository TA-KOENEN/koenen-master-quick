<template>
  <div>
    <ta-statement :stat-text="statTextMulti[18]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[18].label"
      v-model="question_d"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[18].nrOptions"
      :optionA="statTextMulti[18].optionA"
      :optionB="statTextMulti[18].optionB"
      :optionC="statTextMulti[18].optionC"
      :optionD="statTextMulti[18].optionD"
      :optionE="statTextMulti[18].optionE"
    />
  </div>
</template>

<script>
export default {
  name: "FstepQuickD",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_d: {
      get() {
        return this.$store.state.quickAll.question_d;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_d", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
