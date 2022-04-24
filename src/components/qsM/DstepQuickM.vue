<template>
  <div>
    <ta-statement :stat-text="statTextMulti[19]" :formal="formal" />
    <ta-statement :stat-text="statTextMulti[20]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[20].label"
      v-model="question_b"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[20].nrOptions"
      :optionA="statTextMulti[20].optionA"
      :optionB="statTextMulti[20].optionB"
    />
    <ta-statement :stat-text="statTextMulti[21]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[21].label"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[21].nrOptions"
      :optionA="statTextMulti[21].optionA"
      :optionB="statTextMulti[21].optionB"
    />
    <ta-statement :stat-text="statTextMulti[22]" :formal="formal" />
    <ta-val-area
      rules="max:500"
      v-model="text_d"
      :label="statTextMulti[22].label"
    />
  </div>
</template>

<script>
export default {
  name: "DstepQuickM",
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
    text_d: {
      get() {
        return this.$store.state.quickAll.text_d;
      },
      set(value) {
        this.$store.commit("quickAll/update_text_d", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
