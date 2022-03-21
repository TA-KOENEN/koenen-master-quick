<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[4].nrOptions"
      :optionA="statTextMulti[4].optionA"
      :optionB="statTextMulti[4].optionB"
      :optionC="statTextMulti[4].optionC"
    />
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
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
    question_c: {
      get() {
        return this.$store.state.quickAll.question_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
