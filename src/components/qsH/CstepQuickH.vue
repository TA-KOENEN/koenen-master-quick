<template>
  <div>
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[3].label"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[3].nrOptions"
      :optionA="statTextMulti[3].optionA"
      :optionB="statTextMulti[3].optionB"
      :optionC="statTextMulti[3].optionC"
      :optionD="statTextMulti[3].optionD"
      :optionE="statTextMulti[3].optionE"
      :optionF="statTextMulti[3].optionF"
      :optionG="statTextMulti[3].optionG"
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
    question_c: {
      get() {
        return this.$store.state.quickAll.question_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
