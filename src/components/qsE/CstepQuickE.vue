<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-radio
      v-model="question_c"
      :label="statTextMulti[4].label"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[4].nrOptions"
      :optionA="statTextMulti[4].optionA"
      :optionB="statTextMulti[4].optionB"
      :optionC="statTextMulti[4].optionC"
      :optionD="statTextMulti[4].optionD"
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
    question_c: {
      get() {
        return this.$store.state.quickE.question_c;
      },
      set(value) {
        this.$store.commit("quickE/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
