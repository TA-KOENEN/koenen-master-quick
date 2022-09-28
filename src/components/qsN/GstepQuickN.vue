<template>
  <div>
    <ta-statement :stat-text="statTextMulti[11]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_i"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[11].nrOptions"
      :optionA="statTextMulti[11].optionA"
      :optionB="statTextMulti[11].optionB"
      :optionC="statTextMulti[11].optionC"
      :optionD="statTextMulti[11].optionD"
    />
  </div>
</template>

<script>
export default {
  name: "EstepQuickN",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_i: {
      get() {
        return this.$store.state.quickAll.question_i;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_i", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
