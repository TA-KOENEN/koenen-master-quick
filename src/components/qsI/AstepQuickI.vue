<template>
  <div>
    <ta-statement :stat-text="statTextMulti[1]" :formal="formal" />
    <ta-slider-feeling v-model="sl_a" />
  </div>
</template>

<script>
export default {
  name: "AstepQuickI",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_a: {
      get() {
        return this.$store.state.quickI.sl_a;
      },
      set(value) {
        this.$store.commit("quickI/update_sl_a", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
