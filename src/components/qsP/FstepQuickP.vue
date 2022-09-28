<template>
  <div>
    <ta-statement :stat-text="statTextMulti[6]" :formal="formal" />
    <ta-slider-feeling v-model="sl_f" />
  </div>
</template>

<script>
export default {
  name: "FstepQuickP",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_f: {
      get() {
        return this.$store.state.quickAll.sl_f;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_f", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
