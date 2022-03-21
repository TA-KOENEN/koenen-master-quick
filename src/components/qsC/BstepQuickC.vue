<template>
  <div>
    <ta-statement :stat-text="statTextMulti[9]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[7].label"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[9].nrOptions"
      :optionA="statTextMulti[9].optionA"
      :optionB="statTextMulti[9].optionB"
      :optionC="statTextMulti[9].optionC"
    />
  </div>
</template>

<script>
export default {
  name: "BstepQuickC",
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
