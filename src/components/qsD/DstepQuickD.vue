<template>
  <div>
    <ta-statement :stat-text="statTextMulti[16]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[16].label"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[16].nrOptions"
      :optionA="statTextMulti[16].optionA"
      :optionB="statTextMulti[16].optionB"
      :optionC="statTextMulti[16].optionC"
      :optionD="statTextMulti[16].optionD"
      :optionE="statTextMulti[16].optionE"
    />
  </div>
</template>

<script>
export default {
  name: "DstepQuickD",
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
