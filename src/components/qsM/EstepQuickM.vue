<template>
  <div>
    <ta-statement :stat-text="statTextMulti[23]" :formal="formal" />
    <ta-val-area
      rules="max:200"
      v-model="text_e"
      :label="statTextMulti[2].label"
    />
    <ta-statement :stat-text="statTextMulti[24]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[24].label"
      v-model="question_d"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[24].nrOptions"
      :optionA="statTextMulti[24].optionA"
      :optionB="statTextMulti[24].optionB"
    />
  </div>
</template>

<script>
export default {
  name: "EstepQuickM",
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
  },
  methods: {},
};
</script>

<style scoped></style>
