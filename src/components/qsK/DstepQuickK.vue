<template>
  <div>
    <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[7].label"
      v-model="question_g"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[7].nrOptions"
      :optionA="statTextMulti[7].optionA"
      :optionB="statTextMulti[7].optionB"
      :optionC="statTextMulti[7].optionC"
      :optionD="statTextMulti[7].optionD"
    />
    <div v-if="question_g === 'ke1'">
      <ta-between-text :stat-text="statTextMulti[18]" :formal="formal" />
      <ta-statement :stat-text="statTextMulti[8]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[8].label"
        v-model="question_h"
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
  </div>
</template>

<script>
export default {
  name: "DstepQuickK",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_g: {
      get() {
        return this.$store.state.quickK.question_g;
      },
      set(value) {
        this.$store.commit("quickK/update_question_g", value);
      },
    },
    question_h: {
      get() {
        return this.$store.state.quickK.question_h;
      },
      set(value) {
        this.$store.commit("quickK/update_question_h", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
