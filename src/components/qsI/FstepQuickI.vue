<template>
  <div>
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-slider-feeling v-model="sl_d" />
  </div>
</template>

<script>
export default {
  name: "FstepQuickI",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_d: {
      get() {
        return this.$store.state.quickAll.sl_d;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_d", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
