<template>
  <div>
    <h3 v-if="formal" class="secondary--text">{{ textIn[step].header }}</h3>
    <h3 v-if="!formal" class="secondary--text">{{ textIn[step].headerInf }}</h3>
    <br /><br />
    <div v-if="formal" class="textColorLeft--text">
      {{ textIn[step].text_a }}
    </div>
    <div v-if="!formal" class="textColorLeft--text">
      {{ textIn[step].text_aInf }}
    </div>
    <br />
    <div v-if="formal" class="textColorLeft--text">
      {{ textIn[step].text_b }}
    </div>
    <div v-if="!formal" class="textColorLeft--text">
      {{ textIn[step].text_bInf }}
    </div>
    <br />
    <div v-if="formal" class="textColorLeft--text">
      {{ textIn[step].text_c }}
    </div>
    <div v-if="!formal" class="textColorLeft--text">
      {{ textIn[step].text_cInf }}
    </div>
    <br />
    <div v-if="formal" class="textColorLeft--text">
      {{ textIn[step].text_d }}
    </div>
    <div v-if="!formal" class="textColorLeft--text">
      {{ textIn[step].text_dInf }}
    </div>
    <br />
    <div v-if="formal" class="textColorLeft--text">
      {{ textIn[step].text_e }}
    </div>
    <div v-if="!formal" class="textColorLeft--text">
      {{ textIn[step].text_eInf }}
    </div>
    <div v-if="textIn[step].sign">
      <br /><br />
      {{ firstNameUser }} {{ lastNameUser }}
    </div>

    <div v-if="formal && textIn[step].text_f" class="textColorLeft--text">
      <br />
      {{ textIn[step].text_f }}
    </div>
    <div v-if="!formal && textIn[step].text_fInf" class="textColorLeft--text">
      <br />
      {{ textIn[step].text_fInf }}
    </div>

    <div v-if="formal && textIn[step].text_g" class="textColorLeft--text">
      <br />
      {{ textIn[step].text_g }}
    </div>
    <div v-if="!formal && textIn[step].text_gInf" class="textColorLeft--text">
      <br />
      {{ textIn[step].text_gInf }}
    </div>
    <div v-if="textIn[step].sign">
      <br /><br />
      {{ websiteTeam }}
    </div>

    <div v-if="formal && textIn[step].text_h" class="textColorLeft--text">
      <br />
      {{ textIn[step].text_h }}
    </div>
    <div v-if="!formal && textIn[step].text_hInf" class="textColorLeft--text">
      <br />
      {{ textIn[step].text_hInf }}
    </div>
  </div>
</template>

<script>
export default {
  name: "taTextLeft",
  props: [
    "textIn",
    "step",
    "formal",
    "firstNameUser",
    "lastNameUser",
    "websiteTeam",
  ],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
