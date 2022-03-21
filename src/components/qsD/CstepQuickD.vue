<template>
  <div>
    <ta-statement :stat-text="statTextMulti[9]" :formal="formal" />
    <ta-checkbox v-model="cb_e" :label="statTextMulti[10].label" />
    <ta-checkbox v-model="cb_f" :label="statTextMulti[11].label" />
    <ta-checkbox v-model="cb_g" :label="statTextMulti[12].label" />
    <ta-checkbox v-model="cb_h" :label="statTextMulti[13].label" />
    <ta-checkbox v-model="cb_i" :label="statTextMulti[14].label" />
    <div v-if="cb_i">
      <ta-val-area
        :textA="'Anders, nl:'"
        :rules="'max:200'"
        :label="'Anders'"
        v-model="text_c"
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
    cb_g: {
      get() {
        return this.$store.state.quickAll.cb_g;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_g", value);
      },
    },
    cb_h: {
      get() {
        return this.$store.state.quickAll.cb_h;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_h", value);
      },
    },
    cb_i: {
      get() {
        return this.$store.state.quickAll.cb_i;
      },
      set(value) {
        this.$store.commit("quickAll/update_cb_i", value);
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
