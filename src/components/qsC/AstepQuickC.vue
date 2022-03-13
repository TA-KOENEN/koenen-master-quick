<template>
  <div>
    <ta-statement :stat-text="statTextMulti[32]" :formal="formal" />
    <ta-statement :stat-text="statTextMulti[1]" :formal="formal" />
    <ta-slider-rating v-model="sl_a" />
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-slider-rating v-model="sl_b" />
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-slider-rating v-model="sl_c" />
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-slider-rating v-model="sl_d" />
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-slider-rating v-model="sl_e" />
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-slider-rating v-model="sl_f" />
    <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
    <ta-radio
      label="Bovenstaande vraag"
      v-model="question_a"
      error-messages="errors"
      rules="required"
      :nrOptions="statTextMulti[7].nrOptions"
      :optionA="statTextMulti[7].optionA"
      :optionB="statTextMulti[7].optionB"
      :optionC="statTextMulti[7].optionC"
    />
    <div v-if="question_a === 'ke1'">
      <ta-statement :stat-text="statTextMulti[8]" :formal="formal" />
      <ta-val-area
        rules="required"
        v-model="text_a"
        :label="statTextMulti[8].label"
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
    sl_a: {
      get() {
        return this.$store.state.quickC.sl_a;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.quickC.sl_b;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.quickC.sl_c;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.quickC.sl_d;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.quickC.sl_e;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.quickC.sl_f;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_f", value);
      },
    },
    question_a: {
      get() {
        return this.$store.state.quickC.question_a;
      },
      set(value) {
        this.$store.commit("quickC/update_question_a", value);
      },
    },
    text_a: {
      get() {
        return this.$store.state.quickC.text_a;
      },
      set(value) {
        this.$store.commit("quickC/update_text_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
