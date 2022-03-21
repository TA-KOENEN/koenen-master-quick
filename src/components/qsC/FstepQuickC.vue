<template>
  <div>
    <ta-statement :stat-text="statTextMulti[22]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[22].label"
      v-model="question_f"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[22].nrOptions"
      :optionA="statTextMulti[22].optionA"
      :optionB="statTextMulti[22].optionB"
    />
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
    question_f: {
      get() {
        return this.$store.state.quickAll.question_f;
      },
      set(value) {
        this.$store.commit("quickAll/update_question_f", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
