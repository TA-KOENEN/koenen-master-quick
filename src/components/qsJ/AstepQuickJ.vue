<template>
  <div>
    <ta-statement :stat-text="statTextMulti[1]" :formal="formal" />
    <ta-statement :stat-text="statTextMulti[2]" :formal="formal" />
    <ta-slider-rating v-model="sl_a" />
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-slider-rating v-model="sl_b" />
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-slider-rating v-model="sl_c" />
    <ta-statement :stat-text="statTextMulti[5]" :formal="formal" />
    <ta-slider-rating v-model="sl_d" />
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-slider-rating v-model="sl_e" />
    <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
    <ta-slider-rating v-model="sl_f" />
  </div>
</template>

<script>
export default {
  name: "AstepQuickJ",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_a: {
      get() {
        return this.$store.state.quickAll.sl_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.quickAll.sl_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.quickAll.sl_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.quickAll.sl_d;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.quickAll.sl_e;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.quickAll.sl_f;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_f", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
