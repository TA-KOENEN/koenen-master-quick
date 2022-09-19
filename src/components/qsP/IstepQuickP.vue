<template>
  <div>
    <ta-statement :stat-text="statTextMulti[9]" :formal="formal" />
    <ta-slider-feeling v-model="sl_i" />
  </div>
</template>

<script>
export default {
  name: "HstepQuickP",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_i: {
      get() {
        return this.$store.state.quickAll.sl_i;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_i", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
