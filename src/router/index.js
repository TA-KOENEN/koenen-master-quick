import Vue from "vue";
import VueRouter from "vue-router";
import stepOne from "@/views/stepOne.vue";
import stepTwo from "@/views/stepTwo.vue";
import stepThree from "@/views/stepThree";
import stepFour from "@/views/stepFour";
import stepFive from "@/views/stepFive";
import stepSix from "@/views/stepSix";
import stepSeven from "@/views/stepSeven";
import stepEight from "@/views/stepEight";
import stepNine from "@/views/stepNine";
import stepTen from "@/views/stepTen";
import stepEleven from "@/views/stepEleven";
import stepTwelve from "@/views/stepTwelve";
import stepThirteen from "@/views/stepThirteen";
import stepEnd from "@/views/stepEnd";
import LoginSecond from "../views/LoginSecond";
import Intro from "@/views/Intro";
import Start from "@/views/Start";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "Start",
      component: Start,
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginSecond,
    },
    {
      path: "/schema",
      name: "stepOne",
      component: stepOne,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/toolbar",
      name: "stepTwo",
      component: stepTwo,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/links",
      name: "stepThree",
      component: stepThree,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/rechts",
      name: "stepFour",
      component: stepFour,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/radio",
      name: "stepFive",
      component: stepFive,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/checkbox",
      name: "stepSix",
      component: stepSix,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/gevoelsscore",
      name: "stepSeven",
      component: stepSeven,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/rating",
      name: "stepEight",
      component: stepEight,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/knoppen",
      name: "stepNine",
      component: stepNine,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/tekst-links",
      name: "stepTen",
      component: stepTen,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/tekst-rechts",
      name: "stepEleven",
      component: stepEleven,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/video",
      name: "stepTwelve",
      component: stepTwelve,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/anders",
      name: "stepThirteen",
      component: stepThirteen,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/einde",
      name: "stepEnd",
      component: stepEnd,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "*",
      component: Start,
      name: "Start",
    },
  ],
});

export default router;
