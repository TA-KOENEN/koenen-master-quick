<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[4].nrOptions"
      :optionA="statTextMulti[4].optionA"
      :optionB="statTextMulti[4].optionB"
      :optionC="statTextMulti[4].optionC"
      :optionD="statTextMulti[4].optionD"
    />
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_d"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[5].nrOptions"
      :optionA="statTextMulti[5].optionA"
      :optionB="statTextMulti[5].optionB"
      :optionC="statTextMulti[5].optionC"
      :optionD="statTextMulti[5].optionD"
    />
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-slider-feeling v-model="sl_b" />
  </div>
</template>

<script>
export default {
  name: "BstepQuickN",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_c: {
      get() {
        return this.$store.state.quickAll.question_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.quickAll.question_d;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_d", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.quickAll.sl_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
