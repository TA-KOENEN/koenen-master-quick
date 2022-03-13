<template>
  <div>
    <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[7].nrOptions"
      :optionA="statTextMulti[7].optionA"
      :optionB="statTextMulti[7].optionB"
      :optionC="statTextMulti[7].optionC"
    />
  </div>
</template>

<script>
export default {
  name: "GstepQuickB",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_c: {
      get() {
        return this.$store.state.quickB.question_c;
      },
      set(value) {
        this.$store.commit("quickB/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
