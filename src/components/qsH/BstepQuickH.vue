<template>
  <div>
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[2].label"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[2].nrOptions"
      :optionA="statTextMulti[2].optionA"
      :optionB="statTextMulti[2].optionB"
      :optionC="statTextMulti[2].optionC"
      :optionD="statTextMulti[2].optionD"
      :optionE="statTextMulti[2].optionE"
      :optionF="statTextMulti[2].optionF"
      :optionG="statTextMulti[2].optionG"
    />
  </div>
</template>

<script>
export default {
  name: "BstepQuickH",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_b: {
      get() {
        return this.$store.state.quickAll.question_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
