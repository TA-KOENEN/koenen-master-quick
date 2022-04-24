<template>
  <div>
    <ta-statement :stat-text="statTextMulti[9]" :formal="formal" />
    <ta-radio
      v-model="question_g"
      :label="statTextMulti[9].label"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[9].nrOptions"
      :optionA="statTextMulti[9].optionA"
      :optionB="statTextMulti[9].optionB"
      :optionC="statTextMulti[9].optionC"
    />
    <div v-if="question_g === 'ke1'">
      <ta-statement :stat-text="statTextMulti[10]" :formal="formal" />
      <ta-radio
        v-model="question_h"
        :label="statTextMulti[10].label"
        error-messages="errors"
        rules="required"
        :nrOptions="statTextMulti[10].nrOptions"
        :optionA="statTextMulti[10].optionA"
        :optionB="statTextMulti[10].optionB"
        :optionC="statTextMulti[10].optionC"
      />
      <ta-statement :stat-text="statTextMulti[14]" :formal="formal" />
      <ta-slider-feeling v-model="sl_c" />
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
    question_g: {
      get() {
        return this.$store.state.quickAll.question_g;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_g", value);
      },
    },
    question_h: {
      get() {
        return this.$store.state.quickAll.question_h;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_h", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.quickAll.sl_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
