<template>
  <div>
    <ta-statement :stat-text="statTextMulti[8]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_f"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[8].nrOptions"
      :optionA="statTextMulti[8].optionA"
      :optionB="statTextMulti[8].optionB"
      :optionC="statTextMulti[8].optionC"
      :optionD="statTextMulti[8].optionD"
      :optionE="statTextMulti[8].optionE"
    />
  </div>
</template>

<script>
export default {
  name: "DstepQuickN",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_f: {
      get() {
        return this.$store.state.quickAll.question_f;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_f", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
