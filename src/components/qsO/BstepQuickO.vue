<template>
  <div>
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_a"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[2].nrOptions"
      :optionA="statTextMulti[2].optionA"
      :optionB="statTextMulti[2].optionB"
      :optionC="statTextMulti[2].optionC"
      :optionD="statTextMulti[2].optionD"
    />
    <div v-if="question_a === 'ke1'">
      <ta-val-area
        :textA="'Welk bedrijfstakpensioenfonds betreft dit'"
        :rules="'max:200'"
        :label="'Pensioenfonds'"
        v-model="question_b"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BstepQuickO",
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
  },
  methods: {},
};
</script>

<style scoped></style>
