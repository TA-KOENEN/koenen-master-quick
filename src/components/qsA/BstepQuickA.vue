<template>
  <div>
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-radio
      label="Opvolger/waarnemer"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[2].nrOptions"
      :optionA="statTextMulti[2].optionA"
      :optionB="statTextMulti[2].optionB"
      :optionC="statTextMulti[2].optionC"
    />
    <ta-statement
      v-if="question_b === 'ke2'"
      :stat-text="statTextMulti[3]"
      :formal="formal"
    />
  </div>
</template>

<script>
export default {
  name: "BstepQuickA",
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
