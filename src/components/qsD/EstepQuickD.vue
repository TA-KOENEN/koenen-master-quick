<template>
  <div>
    <ta-statement :stat-text="statTextMulti[17]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[17].label"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[17].nrOptions"
      :optionA="statTextMulti[17].optionA"
      :optionB="statTextMulti[17].optionB"
      :optionC="statTextMulti[17].optionC"
      :optionD="statTextMulti[17].optionD"
      :optionE="statTextMulti[17].optionE"
    />
  </div>
</template>

<script>
export default {
  name: "EstepQuickD",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    question_c: {
      get() {
        return this.$store.state.quickD.question_c;
      },
      set(value) {
        this.$store.commit("quickD/update_question_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
