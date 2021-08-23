<template>
  <v-container xs12 sm6 offset-sm3>
    <error-start />
    <v-row justify="center">
      <div class="hoofd" @click="begin">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoo"
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
            class="logoo2"
            src="img/tekst-wit.png"
            :width="imageHeight2"
            alt="logo"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="verder info--text">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft"
          appear
        >
          <p class="logoo3">Click op het logo om verder te gaan</p>
        </transition>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService";
import errorStart from "@/components/core/errorStart";
export default {
  name: "Start",
  components: { errorStart },
  data() {
    return {
      animated: false,
      tokkie: null,
      token: null,
      email: null,
      companyName: null,
      place: null,
      firstNameUser: null,
      lastNameUser: null,
      emailUser: null,
      telephoneUser: null,
    };
  },

  methods: {
    begin() {
      this.$router.push({ name: "Login" });
    },
    begin2() {
      this.email = localStorage.getItem("email");
      this.tokkie = JSON.parse(localStorage.getItem("tokkie"));
      this.token = localStorage.getItem("token");
      if (this.token && this.email) {
        this.$router.push({ name: "Modules" });
      } else if (this.tokkie === "123") {
        this.$router.push({ name: "Login" });
      } else {
        const payload = {
          token: this.tokkie,
        };
        AuthService.getInfo(payload)
          .then((response) => {
            this.firstNameUser = response.data.data.user.first_name;
            this.lastNameUser = response.data.data.user.last_name;
            this.emailUser = response.data.data.user.email;
            this.telephoneUser = response.data.data.user.telephone;
            this.place = response.data.data.place;
            this.companyName = response.data.data.family_name;
            console.log(response);
            if (this.place) {
              console.log("gaat heel goed gaat door");
              localStorage.setItem(
                "companyName",
                JSON.stringify(this.companyName)
              );
              localStorage.setItem(
                "firstNameUser",
                JSON.stringify(this.firstNameUser)
              );
              localStorage.setItem(
                "lastNameUser",
                JSON.stringify(this.lastNameUser)
              );
              localStorage.setItem("emailUser", JSON.stringify(this.emailUser));
              localStorage.setItem(
                "telephoneUser",
                JSON.stringify(this.telephoneUser)
              );
              this.$router.push({ name: "Intro" });
            } else {
              // eslint-disable-next-line no-undef
              EventBus.$emit("errStart", true);
            }
          })
          .catch(function () {
            // eslint-disable-next-line no-undef
            EventBus.$emit("errStart", true);
          });
      }
    },
  },

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
  created() {
    this.tokkie = JSON.parse(localStorage.getItem("tokkie"));
  },
};
</script>

<style scoped>
.hoofd {
  padding-top: 10vh;
}

.logoo {
  animation-duration: 3s;
}

.logoo2 {
  animation-duration: 1s;
  animation-delay: 3s;
}
.logoo3 {
  animation-duration: 1s;
  animation-delay: 3s;
}

.verder {
  animation-delay: 3s;
}

v-image {
  margin-left: 20px;
}
</style>
