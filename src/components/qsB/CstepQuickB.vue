<template>
  <div>
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-slider-feeling v-model="sl_b" />
  </div>
</template>

<script>
export default {
  name: "CstepQuickB",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_b: {
      get() {
        return this.$store.state.quickB.sl_b;
      },
      set(value) {
        this.$store.commit("quickB/update_sl_b", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
