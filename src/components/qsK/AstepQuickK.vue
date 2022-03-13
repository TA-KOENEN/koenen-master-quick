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
    />
  </div>
</template>

<script>
export default {
  name: "AstepQuickK",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_a: {
      get() {
        return this.$store.state.quickK.question_a;
      },
      set(value) {
        this.$store.commit("quickK/update_question_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
