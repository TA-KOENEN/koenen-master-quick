<template>
  <div>
    <ta-statement :stat-text="statTextMulti[14]" :formal="formal" />
    <ta-val-area v-model="text_a" :label="'Andere vragen'" :rules="'max:250'" />
    <ta-statement :stat-text="statTextMulti[15]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[15].label"
      v-model="question_n"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[15].nrOptions"
      :optionA="statTextMulti[15].optionA"
      :optionB="statTextMulti[15].optionB"
      :optionC="statTextMulti[15].optionC"
      :optionD="statTextMulti[15].optionD"
      :optionE="statTextMulti[15].optionE"
    />
  </div>
</template>

<script>
export default {
  name: "GstepQuickK",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    text_a: {
      get() {
        return this.$store.state.quickK.text_a;
      },
      set(value) {
        this.$store.commit("quickK/update_text_a", value);
      },
    },
    question_n: {
      get() {
        return this.$store.state.quickK.question_n;
      },
      set(value) {
        this.$store.commit("quickK/update_question_n", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
