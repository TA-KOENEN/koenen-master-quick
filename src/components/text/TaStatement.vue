<template>
  <div class="mt-5 mb-5">
    <h4 v-if="formal" class="primary--text">
      {{ statText.questionAppForm }}
      <v-icon
        v-if="statText.commentApp"
        color="info"
        dark
        @click.stop="showNote = true"
        >mdi-chat</v-icon
      >
    </h4>
    <h4 v-if="!formal" class="primary--text">
      {{ statText.questionAppInf }}
      <v-icon
        v-if="statText.commentApp"
        color="info"
        dark
        @click.stop="showNote = true"
        >mdi-chat</v-icon
      >
    </h4>
    <ta-note-modal
      :formal="formal"
      :noteAFormal="statText.noteAppFormA"
      :noteBFormal="statText.noteAppFormB"
      :noteAInf="statText.noteAppInfA"
      :noteBInf="statText.noteAppInfB"
      :visible="showNote"
      @close="showNote = false"
    />
  </div>
</template>

<script>
export default {
  name: "TaStatement",
  props: ["statText", "formal"],
  data() {
    return {
      showNote: false,
    };
  },
};
</script>

<style scoped></style>
