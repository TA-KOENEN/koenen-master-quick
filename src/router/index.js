import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
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
      name: "Home",
      component: Home,
    },
    {
      path: "/start",
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
      component: Login,
    },
    {
      path: "/loginB",
      name: "LoginB",
      component: () =>
        import(/* webpackChunkName: "loginB" */ "@/views/LoginB"),
    },
    {
      path: "/loginfam",
      name: "LoginFam",
      component: () =>
        import(/* webpackChunkName: "loginB" */ "@/views/LoginFam"),
    },
    {
      path: "/modules",
      name: "Modules",
      component: () =>
        import(/* webpackChunkName: "modules" */ "@/views/Modules"),
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/familie",
      name: "Module1",
      component: () =>
        import(/* webpackChunkName: "moduleA" */ "@/views/Module1"),
    },
    {
      path: "/conflicten",
      name: "Module2",
      component: () =>
        import(/* webpackChunkName: "moduleB" */ "@/views/Module2"),
    },
    {
      path: "/toekomstvisie",
      name: "Module3",
      component: () =>
        import(/* webpackChunkName: "moduleC" */ "@/views/Module3"),
    },
    {
      path: "/waardenengedrag",
      name: "Module4",
      component: () =>
        import(/* webpackChunkName: "moduleD" */ "@/views/Module4"),
    },
    {
      path: "/familiewaarden",
      name: "Module5",
      component: () =>
        import(/* webpackChunkName: "moduleE" */ "@/views/Module5"),
    },
    {
      path: "/leidingdga",
      name: "Module6",
      component: () =>
        import(/* webpackChunkName: "moduleF" */ "@/views/Module6"),
    },
    {
      path: "/familie-geleid",
      name: "Module7",
      component: () =>
        import(/* webpackChunkName: "moduleG" */ "@/views/Module7"),
    },
    {
      path: "/familie-geleid2",
      name: "Module8",
      component: () =>
        import(/* webpackChunkName: "moduleH" */ "@/views/Module8"),
    },
    {
      path: "/familie-gecontroleerd",
      name: "Module9",
      component: () =>
        import(/* webpackChunkName: "moduleI" */ "@/views/Module9"),
    },
    {
      path: "/eigenarenstrategie",
      name: "Module10",
      component: () =>
        import(/* webpackChunkName: "moduleJ" */ "@/views/Module10"),
    },
    {
      path: "/eigendomsstrategie",
      name: "Module11",
      component: () =>
        import(/* webpackChunkName: "moduleK" */ "@/views/Module11"),
    },
    {
      path: "/opvolging",
      name: "Module12",
      component: () =>
        import(/* webpackChunkName: "moduleL" */ "@/views/Module12"),
    },
    {
      path: "/loopbaan",
      name: "Module13",
      component: () =>
        import(/* webpackChunkName: "moduleM" */ "@/views/Module13"),
    },
    {
      path: "/beloning",
      name: "Module14",
      component: () =>
        import(/* webpackChunkName: "moduleN" */ "@/views/Module14"),
    },
    {
      path: "/socialmedia",
      name: "Module15",
      component: () =>
        import(/* webpackChunkName: "moduleA" */ "@/views/Module15"),
    },
    {
      path: "*",
      component: Start,
      name: "Start",
    },
  ],
});

export default router;
