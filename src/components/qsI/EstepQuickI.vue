<template>
  <div>
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[5].label"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[5].nrOptions"
      :optionA="statTextMulti[5].optionA"
      :optionB="statTextMulti[5].optionB"
    />
  </div>
</template>

<script>
export default {
  name: "DstepQuickI",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_b: {
      get() {
        return this.$store.state.quickI.question_b;
      },
      set(value) {
        this.$store.commit("quickI/update_question_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
