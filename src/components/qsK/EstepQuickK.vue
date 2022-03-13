<template>
  <div>
    <ta-statement :stat-text="statTextMulti[9]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[9].label"
      v-model="question_i"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[9].nrOptions"
      :optionA="statTextMulti[9].optionA"
      :optionB="statTextMulti[9].optionB"
      :optionC="statTextMulti[9].optionC"
      :optionD="statTextMulti[9].optionD"
    />
    <div v-if="question_i === 'ke1'">
      <ta-between-text :stat-text="statTextMulti[19]" :formal="formal" />
      <ta-statement :stat-text="statTextMulti[10]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[10].label"
        v-model="question_j"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[10].nrOptions"
        :optionA="statTextMulti[10].optionA"
        :optionB="statTextMulti[10].optionB"
        :optionC="statTextMulti[10].optionC"
        :optionD="statTextMulti[10].optionD"
        :optionE="statTextMulti[10].optionE"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "EstepQuickK",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_i: {
      get() {
        return this.$store.state.quickK.question_i;
      },
      set(value) {
        this.$store.commit("quickK/update_question_i", value);
      },
    },
    question_j: {
      get() {
        return this.$store.state.quickK.question_j;
      },
      set(value) {
        this.$store.commit("quickK/update_question_j", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
