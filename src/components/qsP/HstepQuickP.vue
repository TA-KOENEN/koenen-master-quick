<template>
  <div>
    <ta-statement :stat-text="statTextMulti[8]" :formal="formal" />
    <ta-slider-feeling v-model="sl_h" />
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
    sl_h: {
      get() {
        return this.$store.state.quickAll.sl_h;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_h", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
