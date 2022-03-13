<template>
  <div>
    <ta-statement :stat-text="statTextMulti[8]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[8].label"
      v-model="question_a"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[8].nrOptions"
      :optionA="statTextMulti[8].optionA"
      :optionB="statTextMulti[8].optionB"
      :optionC="statTextMulti[8].optionC"
    />
  </div>
</template>

<script>
export default {
  name: "BstepQuickJ",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_a: {
      get() {
        return this.$store.state.quickJ.question_a;
      },
      set(value) {
        this.$store.commit("quickJ/update_question_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
