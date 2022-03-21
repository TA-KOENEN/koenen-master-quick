<template>
  <div>
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-checkbox v-model="cb_a" :label="statTextMulti[4].label" />
    <ta-checkbox v-model="cb_b" :label="statTextMulti[5].label" />
    <ta-checkbox v-model="cb_c" :label="statTextMulti[6].label" />
    <ta-checkbox v-model="cb_d" :label="statTextMulti[7].label" />
    <div v-if="cb_d">
      <ta-val-area
        :textA="'Anders, nl:'"
        :rules="'max:200'"
        :label="'Anders'"
        v-model="text_b"
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
    text_b: {
      get() {
        return this.$store.state.quickAll.text_b;
      },
      set(value) {
        this.$store.commit("quickAll/update_text_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
