<template>
  <div class="mt-5 mb-5">
    <div v-if="formal">
      {{ statText.questionAppForm }}
    </div>
    <div v-if="!formal">
      {{ statText.questionAppForm }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TaBeTweenText",
  props: ["statText", "formal"],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
