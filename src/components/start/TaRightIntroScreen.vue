<template>
  <div>
    <vimeo-player
      :video-id="vimeoCode"
      class="embed-container"
      :options="{ responsive: true }"
    ></vimeo-player>
    <div class="mt-10 textColor--text">
      <div v-if="formal">Beste {{ firstNameClient }} {{ lastNameClient }},</div>
      <div v-if="!formal">Beste {{ firstNameClient }},</div>
      <br /><br />
      <div v-if="formal">{{ textData.formal.text_a }}</div>
      <div v-if="!formal">{{ textData.informal.text_a }}</div>
      <br />
      <div v-if="formal">{{ textData.formal.text_b }}</div>
      <div v-if="!formal">{{ textData.informal.text_b }}</div>
      <br />
      <div v-if="formal">{{ textData.formal.text_c }}</div>
      <div v-if="!formal">{{ textData.informal.text_c }}</div>
      <br />
      <div v-if="formal">{{ textData.formal.text_d }}</div>
      <div v-if="!formal">{{ textData.informal.text_d }}</div>
      <br />
      <div v-if="formal">{{ textData.formal.text_e }}</div>
      <div v-if="!formal">{{ textData.informal.text_e }}</div>
      <br />
      <div v-if="formal">{{ textData.formal.text_f }}</div>
      <div v-if="!formal">{{ textData.informal.text_f }}</div>
      <br />
      <div v-if="formal">{{ textData.formal.text_g }}</div>
      <div v-if="!formal">{{ textData.informal.text_g }}</div>
      <br /><br />
      <div>{{ firstNameUser }} {{ lastNameUser }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaRightIntroScreen",
  props: [
    "vimeoCode",
    "formal",
    "textData",
    "firstNameClient",
    "lastNameClient",
    "firstNameUser",
    "lastNameUser",
  ],
};
</script>

<style scoped></style>
