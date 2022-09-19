<template>
  <div>
    <ta-statement :stat-text="statTextMulti[9]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_g"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[9].nrOptions"
      :optionA="statTextMulti[9].optionA"
      :optionB="statTextMulti[9].optionB"
      :optionC="statTextMulti[9].optionC"
      :optionD="statTextMulti[9].optionD"
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
    question_g: {
      get() {
        return this.$store.state.quickAll.question_g;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_g", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
