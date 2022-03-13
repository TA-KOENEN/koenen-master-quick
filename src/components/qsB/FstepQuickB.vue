<template>
  <div>
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-slider-feeling v-model="sl_d" />
  </div>
</template>

<script>
export default {
  name: "FstepQuickB",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_d: {
      get() {
        return this.$store.state.quickB.sl_d;
      },
      set(value) {
        this.$store.commit("quickB/update_sl_d", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
