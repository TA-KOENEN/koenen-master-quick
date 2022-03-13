<template>
  <div>
    <ta-statement :stat-text="statTextMulti[19]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[19].label"
      v-model="question_e"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[19].nrOptions"
      :optionA="statTextMulti[19].optionA"
      :optionB="statTextMulti[19].optionB"
      :optionC="statTextMulti[19].optionC"
      :optionD="statTextMulti[19].optionD"
      :optionE="statTextMulti[19].optionE"
    />
  </div>
</template>

<script>
export default {
  name: "GstepQuickD",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_e: {
      get() {
        return this.$store.state.quickD.question_e;
      },
      set(value) {
        this.$store.commit("quickD/update_question_e", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
