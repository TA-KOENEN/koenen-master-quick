<template>
  <div>
    <ta-statement :stat-text="statTextMulti[11]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[11].label"
      v-model="question_d"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[11].nrOptions"
      :optionA="statTextMulti[11].optionA"
      :optionB="statTextMulti[11].optionB"
    />
    <ta-statement :stat-text="statTextMulti[12]" :formal="formal" />
    <ta-val-area
      v-model="text_a"
      :label="'Waarom wel / niet'"
      :rules="'max:250'"
    />
  </div>
</template>

<script>
export default {
  name: "DstepQuickJ",
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
    text_a: {
      get() {
        return this.$store.state.quickAll.text_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_text_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
