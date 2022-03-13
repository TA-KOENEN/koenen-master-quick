<template>
  <div>
    <ta-statement :stat-text="statTextMulti[4]" :formal="formal" />
    <ta-slider-rating />
  </div>
</template>

<script>
export default {
  name: "aStep",
  props: ["statTextMulti", "formal"],
};
</script>

<style scoped></style>
