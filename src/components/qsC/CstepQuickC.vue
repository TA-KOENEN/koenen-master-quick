<template>
  <div>
    <ta-statement :stat-text="statTextMulti[10]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[10].label"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[10].nrOptions"
      :optionA="statTextMulti[10].optionA"
      :optionB="statTextMulti[10].optionB"
      :optionC="statTextMulti[10].optionC"
    />
    <div v-if="question_c === 'ke1'">
      <ta-statement :stat-text="statTextMulti[11]" :formal="formal" />
      <ta-slider-feeling v-model="sl_g" />
    </div>
    <div v-if="question_c === 'ke2'">
      <ta-statement :stat-text="statTextMulti[12]" :formal="formal" />
      <ta-radio
        :label="statTextMulti[12].label"
        v-model="question_d"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[12].nrOptions"
        :optionA="statTextMulti[12].optionA"
        :optionB="statTextMulti[12].optionB"
        :optionC="statTextMulti[12].optionC"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CstepQuickC",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_g: {
      get() {
        return this.$store.state.quickC.sl_g;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_g", value);
      },
    },
    question_c: {
      get() {
        return this.$store.state.quickC.question_c;
      },
      set(value) {
        this.$store.commit("quickC/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.quickC.question_d;
      },
      set(value) {
        this.$store.commit("quickC/update_question_d", value);
      },
    },
    text_a: {
      get() {
        return this.$store.state.quickC.text_a;
      },
      set(value) {
        this.$store.commit("quickC/update_text_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
