<template>
  <v-container xs12 sm6 offset-sm3>
    <v-row justify="center">
      <div class="hoofd">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoA"
            :src="
              require(`@/assets/core/logo_${
                $vuetify.theme.dark ? 'light' : 'dark'
              }.png`)
            "
            :width="imageHeight"
            alt="logo"
            style="cursor: pointer"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="tekst mt-10">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoB"
            src="img/tekst-wit.png"
            :width="imageHeight2"
            alt="logo"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center ml-3 mr-3">
      <div class="verder primary--text">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft"
          appear
        >
          <p class="logoC">
            Uitgelogd. Opnieuw inloggen? Gebruik de link in de mail.<br />
          </p>
        </transition>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Start",

  data() {
    return {
      tokkie: "",
    };
  },

  methods: {},

  created() {},
  computed: {
    // eslint-disable-next-line
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "350px";
        case "md":
          return "350px";
        case "lg":
          return "350px";
        case "xl":
          return "600px";
      }
    },
    // eslint-disable-next-line
    imageHeight2() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "250px";
        case "md":
          return "300px";
        case "lg":
          return "400px";
        case "xl":
          return "600px";
      }
    },
  },
};
</script>

<style scoped>
.hoofd {
  padding-top: 15vh;
}

.logoA {
  animation-duration: 3s;
}

.logoB {
  animation-duration: 1s;
  animation-delay: 3s;
}
.logoC {
  animation-duration: 1s;
  animation-delay: 3s;
}

.verder {
  animation-delay: 3s;
}

v-img {
  margin-left: 20px;
}
</style>
