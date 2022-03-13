<template>
  <div>
    <ta-statement :stat-text="statTextMulti[23]" :formal="formal" />
    <ta-checkbox v-model="cb_a" :label="statTextMulti[24].label" />
    <ta-checkbox v-model="cb_b" :label="statTextMulti[25].label" />
    <ta-checkbox v-model="cb_c" :label="statTextMulti[26].label" />
    <ta-checkbox v-model="cb_d" :label="statTextMulti[27].label" />
    <ta-checkbox v-model="cb_e" :label="statTextMulti[28].label" />
    <ta-checkbox v-model="cb_f" :label="statTextMulti[29].label" />
    <div v-if="cb_f">
      <ta-statement :stat-text="statTextMulti[30]" :formal="formal" />
      <ta-val-area
        rules="required"
        v-model="text_c"
        :label="statTextMulti[30].label"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GstepQuickC",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    cb_a: {
      get() {
        return this.$store.state.quickC.cb_a;
      },
      set(value) {
        this.$store.commit("quickC/update_cb_a", value);
      },
    },
    cb_b: {
      get() {
        return this.$store.state.quickC.cb_b;
      },
      set(value) {
        this.$store.commit("quickC/update_cb_b", value);
      },
    },
    cb_c: {
      get() {
        return this.$store.state.quickC.cb_c;
      },
      set(value) {
        this.$store.commit("quickC/update_cb_c", value);
      },
    },
    cb_d: {
      get() {
        return this.$store.state.quickC.cb_d;
      },
      set(value) {
        this.$store.commit("quickC/update_cb_d", value);
      },
    },
    cb_e: {
      get() {
        return this.$store.state.quickC.cb_e;
      },
      set(value) {
        this.$store.commit("quickC/update_cb_e", value);
      },
    },
    cb_f: {
      get() {
        return this.$store.state.quickC.cb_f;
      },
      set(value) {
        this.$store.commit("quickC/update_cb_f", value);
      },
    },
    text_c: {
      get() {
        return this.$store.state.quickC.text_c;
      },
      set(value) {
        this.$store.commit("quickC/update_text_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
