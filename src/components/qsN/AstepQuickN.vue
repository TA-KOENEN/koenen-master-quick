<template>
  <div>
    <ta-statement :stat-text="statTextMulti[1]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_a"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[1].nrOptions"
      :optionA="statTextMulti[1].optionA"
      :optionB="statTextMulti[1].optionB"
      :optionC="statTextMulti[1].optionC"
      :optionD="statTextMulti[1].optionD"
    />
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[2].nrOptions"
      :optionA="statTextMulti[2].optionA"
      :optionB="statTextMulti[2].optionB"
      :optionC="statTextMulti[2].optionC"
      :optionD="statTextMulti[2].optionD"
    />
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-slider-feeling v-model="sl_a" />
  </div>
</template>

<script>
export default {
  name: "AstepQuickN",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_a: {
      get() {
        return this.$store.state.quickAll.question_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_a", value);
      },
    },
    question_b: {
      get() {
        return this.$store.state.quickAll.question_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_b", value);
      },
    },
    sl_a: {
      get() {
        return this.$store.state.quickAll.sl_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
