<template>
  <div>
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[2].label"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[2].nrOptions"
      :optionA="statTextMulti[2].optionA"
      :optionB="statTextMulti[2].optionB"
      :optionC="statTextMulti[2].optionC"
      :optionD="statTextMulti[2].optionD"
    />
    <div v-if="question_b === 'ke2'">
      <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[3].label"
        v-model="question_c"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[3].nrOptions"
        :optionA="statTextMulti[3].optionA"
        :optionB="statTextMulti[3].optionB"
        :optionC="statTextMulti[3].optionC"
        :optionD="statTextMulti[3].optionD"
        :optionE="statTextMulti[3].optionE"
      />
    </div>
    <div
      v-if="
        question_b === 'ke1' || question_c === 'ke1' || question_c === 'ke5'
      "
    >
      <ta-statement :stat-text="statTextMulti[22]" :formal="formal" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AstepQuickK",
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
    question_c: {
      get() {
        return this.$store.state.quickAll.question_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
