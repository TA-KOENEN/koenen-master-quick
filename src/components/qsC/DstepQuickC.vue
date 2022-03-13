<template>
  <div>
    <ta-statement :stat-text="statTextMulti[13]" :formal="formal" />
    <ta-statement :stat-text="statTextMulti[14]" :formal="formal" />
    <ta-slider-feeling v-model="sl_h" />
    <ta-statement :stat-text="statTextMulti[15]" :formal="formal" />
    <ta-slider-feeling v-model="sl_i" />
    <ta-statement :stat-text="statTextMulti[16]" :formal="formal" />
    <ta-slider-feeling v-model="sl_j" />
    <ta-statement :stat-text="statTextMulti[17]" :formal="formal" />
    <ta-slider-feeling v-model="sl_k" />
    <ta-statement :stat-text="statTextMulti[18]" :formal="formal" />
    <ta-slider-feeling v-model="sl_l" />
    <ta-statement :stat-text="statTextMulti[19]" :formal="formal" />
    <ta-slider-feeling v-model="sl_m" />
  </div>
</template>

<script>
export default {
  name: "DstepQuickC",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_h: {
      get() {
        return this.$store.state.quickC.sl_h;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.quickC.sl_i;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.quickC.sl_j;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.quickC.sl_k;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_k", value);
      },
    },
    sl_l: {
      get() {
        return this.$store.state.quickC.sl_l;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_l", value);
      },
    },
    sl_m: {
      get() {
        return this.$store.state.quickC.sl_m;
      },
      set(value) {
        this.$store.commit("quickC/update_sl_m", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
