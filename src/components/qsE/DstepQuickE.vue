<template>
  <div>
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-radio
      v-model="question_d"
      :label="statTextMulti[5].label"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[5].nrOptions"
      :optionA="statTextMulti[5].optionA"
      :optionB="statTextMulti[5].optionB"
      :optionC="statTextMulti[5].optionC"
    />
    <div v-if="question_d === 'ke1'">
      <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
      <ta-radio
        v-model="question_e"
        :label="statTextMulti[6].label"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[6].nrOptions"
        :optionA="statTextMulti[6].optionA"
        :optionB="statTextMulti[6].optionB"
        :optionC="statTextMulti[6].optionC"
      />
      <ta-slider-feeling v-model="sl_b" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BstepquickE",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_d: {
      get() {
        return this.$store.state.quickE.question_d;
      },
      set(value) {
        this.$store.commit("quickE/update_question_d", value);
      },
    },
    question_e: {
      get() {
        return this.$store.state.quickE.question_e;
      },
      set(value) {
        this.$store.commit("quickE/update_question_e", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.quickE.sl_b;
      },
      set(value) {
        this.$store.commit("quickE/update_sl_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
