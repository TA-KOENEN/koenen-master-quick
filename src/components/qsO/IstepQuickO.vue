<template>
  <div>
    <ta-statement :stat-text="statTextMulti[11]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_g"
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
  name: "HstepQuickO",
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
