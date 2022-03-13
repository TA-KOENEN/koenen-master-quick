<template>
  <div>
    <ta-statement :stat-text="statTextMulti[20]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[20].label"
      v-model="question_e"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[20].nrOptions"
      :optionA="statTextMulti[20].optionA"
      :optionB="statTextMulti[20].optionB"
      :optionC="statTextMulti[20].optionC"
      :optionD="statTextMulti[20].optionD"
      :optionE="statTextMulti[20].optionE"
    />
    <div v-if="question_e === 'ke5'">
      <ta-statement :stat-text="statTextMulti[21]" :formal="formal" />
      <ta-val-area
        rules="required"
        v-model="text_b"
        :label="statTextMulti[21].label"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "EstepQuickC",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_e: {
      get() {
        return this.$store.state.quickC.question_e;
      },
      set(value) {
        this.$store.commit("quickC/update_question_e", value);
      },
    },
    text_b: {
      get() {
        return this.$store.state.quickC.text_b;
      },
      set(value) {
        this.$store.commit("quickC/update_text_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
