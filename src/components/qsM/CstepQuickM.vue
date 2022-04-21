<template>
  <div>
    <ta-statement :stat-text="statTextMulti[11]" :formal="formal" />
    <ta-statement :stat-text="statTextMulti[12]" :formal="formal" />
    <ta-slider-rating v-model="sl_g" />
    <ta-statement :stat-text="statTextMulti[13]" :formal="formal" />
    <ta-slider-rating v-model="sl_h" />
    <ta-statement :stat-text="statTextMulti[14]" :formal="formal" />
    <ta-slider-rating v-model="sl_i" />
    <ta-statement :stat-text="statTextMulti[15]" :formal="formal" />
    <ta-slider-rating v-model="sl_j" />
    <ta-statement :stat-text="statTextMulti[16]" :formal="formal" />
    <ta-slider-rating v-model="sl_k" />
    <ta-statement :stat-text="statTextMulti[17]" :formal="formal" />
    <ta-slider-rating v-model="sl_l" />
    <ta-statement :stat-text="statTextMulti[18]" :formal="formal" />
    <ta-val-area
      rules="max:500"
      v-model="text_c"
      :label="statTextMulti[18].label"
    />
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
    sl_g: {
      get() {
        return this.$store.state.quickAll.sl_g;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_g", value);
      },
    },
    sl_h: {
      get() {
        return this.$store.state.quickAll.sl_h;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.quickAll.sl_i;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.quickAll.sl_j;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.quickAll.sl_k;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_k", value);
      },
    },
    sl_l: {
      get() {
        return this.$store.state.quickAll.sl_l;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_l", value);
      },
    },
    text_c: {
      get() {
        return this.$store.state.quickAll.text_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_text_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
