<template>
  <div>
    <ta-statement :stat-text="statTextMulti[11]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[11].label"
      v-model="question_k"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[11].nrOptions"
      :optionA="statTextMulti[11].optionA"
      :optionB="statTextMulti[11].optionB"
      :optionC="statTextMulti[11].optionC"
      :optionD="statTextMulti[11].optionD"
    />
    <div v-if="question_k === 'ke1'">
      <ta-between-text :stat-text="statTextMulti[20]" :formal="formal" />
      <ta-statement :stat-text="statTextMulti[12]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[12].label"
        v-model="question_l"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[12].nrOptions"
        :optionA="statTextMulti[12].optionA"
        :optionB="statTextMulti[12].optionB"
      />
      <ta-between-text :stat-text="statTextMulti[21]" :formal="formal" />
      <ta-statement :stat-text="statTextMulti[13]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[13].label"
        v-model="question_m"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[13].nrOptions"
        :optionA="statTextMulti[13].optionA"
        :optionB="statTextMulti[13].optionB"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FstepQuickK",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_k: {
      get() {
        return this.$store.state.quickAll.question_k;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_k", value);
      },
    },
    question_l: {
      get() {
        return this.$store.state.quickAll.question_l;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_l", value);
      },
    },
    question_m: {
      get() {
        return this.$store.state.quickAll.question_m;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_m", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
