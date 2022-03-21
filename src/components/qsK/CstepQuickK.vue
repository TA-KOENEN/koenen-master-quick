<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[4].label"
      v-model="question_d"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[4].nrOptions"
      :optionA="statTextMulti[4].optionA"
      :optionB="statTextMulti[4].optionB"
      :optionC="statTextMulti[4].optionC"
      :optionD="statTextMulti[4].optionD"
    />
    <div v-if="question_d === 'ke1'">
      <ta-between-text :stat-text="statTextMulti[16]" :formal="formal" />
      <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[5].label"
        v-model="question_e"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[5].nrOptions"
        :optionA="statTextMulti[5].optionA"
        :optionB="statTextMulti[5].optionB"
        :optionC="statTextMulti[5].optionC"
        :optionD="statTextMulti[5].optionD"
        :optionE="statTextMulti[5].optionE"
      />
    </div>
    <div v-if="question_d === 'ke1'">
      <ta-between-text :stat-text="statTextMulti[17]" :formal="formal" />
      <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[6].label"
        v-model="question_f"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[6].nrOptions"
        :optionA="statTextMulti[6].optionA"
        :optionB="statTextMulti[6].optionB"
        :optionC="statTextMulti[6].optionC"
        :optionD="statTextMulti[6].optionD"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CstepQuickK",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_d: {
      get() {
        return this.$store.state.quickAll.question_d;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_d", value);
      },
    },
    question_e: {
      get() {
        return this.$store.state.quickAll.question_e;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_e", value);
      },
    },
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
