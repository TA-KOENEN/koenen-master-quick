<template>
  <div>
    <ta-statement :stat-text="statTextMulti[7]" :formal="formal" />
    <ta-slider-feeling v-model="sl_g" />
  </div>
</template>

<script>
export default {
  name: "GstepQuickP",
  props: ["statTextMulti", "formal"],
  data() {
    return {};
  },
  computed: {
    sl_g: {
      get() {
        return this.$store.state.quickAll.sl_g;
      },
      set(value) {
        this.$store.commit("quickAll/update_sl_g", value);
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
