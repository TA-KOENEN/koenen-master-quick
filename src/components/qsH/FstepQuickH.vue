<template>
  <div>
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-checkbox v-model="cb_a" :label="statTextMulti[8].label" />
    <ta-checkbox v-model="cb_b" :label="statTextMulti[9].label" />
    <ta-checkbox v-model="cb_c" :label="statTextMulti[10].label" />
    <ta-checkbox v-model="cb_d" :label="statTextMulti[11].label" />
    <ta-checkbox v-model="cb_e" :label="statTextMulti[12].label" />
    <ta-checkbox v-model="cb_f" :label="statTextMulti[13].label" />
  </div>
</template>

<script>
export default {
  name: "FstepQuickH",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    cb_a: {
      get() {
        return this.$store.state.quickAll.cb_a;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_a", value);
      },
    },
    cb_b: {
      get() {
        return this.$store.state.quickAll.cb_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_b", value);
      },
    },
    cb_c: {
      get() {
        return this.$store.state.quickAll.cb_c;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_c", value);
      },
    },
    cb_d: {
      get() {
        return this.$store.state.quickAll.cb_d;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_d", value);
      },
    },
    cb_e: {
      get() {
        return this.$store.state.quickAll.cb_e;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_e", value);
      },
    },
    cb_f: {
      get() {
        return this.$store.state.quickAll.cb_f;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_f", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
