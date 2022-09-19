<template>
  <div>
    <ta-statement :stat-text="statTextMulti[10]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_h"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[10].nrOptions"
      :optionA="statTextMulti[10].optionA"
      :optionB="statTextMulti[10].optionB"
      :optionC="statTextMulti[10].optionC"
      :optionD="statTextMulti[10].optionD"
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
    question_h: {
      get() {
        return this.$store.state.quickAll.question_h;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_h", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
