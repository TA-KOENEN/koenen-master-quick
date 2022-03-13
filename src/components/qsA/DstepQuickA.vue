<template>
  <div>
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_d"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[6].nrOptions"
      :optionA="statTextMulti[6].optionA"
      :optionB="statTextMulti[6].optionB"
      :optionC="statTextMulti[6].optionC"
    />
  </div>
</template>

<script>
export default {
  name: "DstepQuickA",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_d: {
      get() {
        return this.$store.state.quickA.question_d;
      },
      set(value) {
        this.$store.commit("quickA/update_question_d", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
