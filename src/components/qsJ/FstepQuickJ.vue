<template>
  <div>
    <ta-statement :stat-text="statTextMulti[14]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[14].label"
      v-model="question_e"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[14].nrOptions"
      :optionA="statTextMulti[14].optionA"
      :optionB="statTextMulti[14].optionB"
    />
  </div>
</template>

<script>
export default {
  name: "FstepQuickJ",
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
