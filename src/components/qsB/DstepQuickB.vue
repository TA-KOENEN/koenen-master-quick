<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[4].nrOptions"
      :optionA="statTextMulti[4].optionA"
      :optionB="statTextMulti[4].optionB"
      :optionC="statTextMulti[4].optionC"
    />
  </div>
</template>

<script>
export default {
  name: "EstepQuickB",
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
