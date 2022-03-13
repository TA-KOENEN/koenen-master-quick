<template>
  <div>
    <ta-statement :stat-text="statTextMulti[3]" :formal="formal" />
    <ta-slider-feeling v-model="sl_c" />
  </div>
</template>

<script>
export default {
  name: "CstepQuickI",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_c: {
      get() {
        return this.$store.state.quickI.sl_c;
      },
      set(value) {
        this.$store.commit("quickI/update_sl_c", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
