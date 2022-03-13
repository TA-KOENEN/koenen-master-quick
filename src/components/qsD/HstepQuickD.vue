<template>
  <div>
    <ta-statement :stat-text="statTextMulti[20]" :formal="formal" />
    <ta-checkbox v-model="cb_j" :label="statTextMulti[21].label" />
    <ta-checkbox v-model="cb_k" :label="statTextMulti[22].label" />
    <ta-checkbox v-model="cb_l" :label="statTextMulti[23].label" />
    <ta-checkbox v-model="cb_m" :label="statTextMulti[24].label" />
    <ta-checkbox v-model="cb_n" :label="statTextMulti[25].label" />
    <ta-checkbox v-model="cb_o" :label="statTextMulti[26].label" />
    <div v-if="cb_o">
      <ta-val-area
        :textA="statTextMulti[27].label"
        :rules="'max:200'"
        :label="'Anders'"
        v-model="text_d"
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
    cb_j: {
      get() {
        return this.$store.state.quickD.cb_j;
      },
      set(value) {
        this.$store.commit("quickD/update_cb_j", value);
      },
    },
    cb_k: {
      get() {
        return this.$store.state.quickD.cb_k;
      },
      set(value) {
        this.$store.commit("quickD/update_cb_k", value);
      },
    },
    cb_l: {
      get() {
        return this.$store.state.quickD.cb_l;
      },
      set(value) {
        this.$store.commit("quickD/update_cb_l", value);
      },
    },
    cb_m: {
      get() {
        return this.$store.state.quickD.cb_m;
      },
      set(value) {
        this.$store.commit("quickD/update_cb_m", value);
      },
    },
    cb_n: {
      get() {
        return this.$store.state.quickD.cb_n;
      },
      set(value) {
        this.$store.commit("quickD/update_cb_n", value);
      },
    },
    cb_o: {
      get() {
        return this.$store.state.quickD.cb_o;
      },
      set(value) {
        this.$store.commit("quickD/update_cb_o", value);
      },
    },
    text_d: {
      get() {
        return this.$store.state.quickD.text_d;
      },
      set(value) {
        this.$store.commit("quickD/update_text_d", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
