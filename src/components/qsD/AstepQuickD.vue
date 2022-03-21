<template>
  <div>
    <ta-statement :stat-text="statTextMulti[1]" :formal="formal" />
    <ta-radio
      :label="statTextMulti[1].label"
      v-model="question_a"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[1].nrOptions"
      :optionA="statTextMulti[1].optionA"
      :optionB="statTextMulti[1].optionB"
      :optionC="statTextMulti[1].optionC"
      :optionD="statTextMulti[1].optionD"
      :optionE="statTextMulti[1].optionE"
    />

    <div v-if="question_a === 'ke5'">
      <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
      <ta-val-area
        rules="required"
        v-model="text_a"
        :label="statTextMulti[2].label"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BstepQuickC",
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
