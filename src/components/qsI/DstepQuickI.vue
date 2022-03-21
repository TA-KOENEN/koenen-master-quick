<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[4].label"
      v-model="question_a"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[4].nrOptions"
      :optionA="statTextMulti[4].optionA"
      :optionB="statTextMulti[4].optionB"
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
    question_a: {
      get() {
        return this.$store.state.quickAll.question_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
