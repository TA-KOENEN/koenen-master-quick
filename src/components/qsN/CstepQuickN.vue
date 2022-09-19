<template>
  <div>
    <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_e"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[7].nrOptions"
      :optionA="statTextMulti[7].optionA"
      :optionB="statTextMulti[7].optionB"
      :optionC="statTextMulti[7].optionC"
      :optionD="statTextMulti[7].optionD"
    />
  </div>
</template>

<script>
export default {
  name: "CstepQuickN",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_e: {
      get() {
        return this.$store.state.quickAll.question_e;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_e", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
