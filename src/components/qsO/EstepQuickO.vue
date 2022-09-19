<template>
  <div>
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_c"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[6].nrOptions"
      :optionA="statTextMulti[6].optionA"
      :optionB="statTextMulti[6].optionB"
      :optionC="statTextMulti[6].optionC"
      :optionD="statTextMulti[6].optionD"
    />
    <div v-if="question_c === 'ke1'">
      <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
      <ta-val-area :rules="'max:200'" :label="'Begeleiding'" v-model="text_a" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EstepQuickO",
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
