import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import LoginB from "../views/LoginB";
import Modules from "../views/Modules";
import Consultants from "@/views/Consultants";
import Projects from "@/views/Projects";
import Module1 from "@/views/Module1";
import Module2 from "@/views/Module2";
import Module3 from "@/views/Module3";
import Module4 from "@/views/Module4";
import Module5 from "@/views/Module5";
import Module6 from "@/views/Module6";
import Module7 from "@/views/Module7";
import Module8 from "@/views/Module8";
import Module9 from "@/views/Module9";
import Module10 from "@/views/Module10";
import Module11 from "@/views/Module11";
import Module12 from "@/views/Module12";
import Module13 from "@/views/Module13";
import Module14 from "@/views/Module14";
import Module15 from "@/views/Module15";
import Intro from "@/views/Intro";
import Start from "@/views/Start";
Vue.use(VueRouter);

const routes = [
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
    component: LoginB,
  },
  {
    path: "/modules",
    name: "Modules",
    component: Modules,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/consultants",
    name: "consultants",
    component: Consultants,
  },
  {
    path: "/familie",
    name: "Module1",
    component: Module1,
  },
  {
    path: "/conflicten",
    name: "Module2",
    component: Module2,
  },
  {
    path: "/toekomstvisie",
    name: "Module3",
    component: Module3,
  },
  {
    path: "/waardenengedrag",
    name: "Module4",
    component: Module4,
  },
  {
    path: "/familiewaarden",
    name: "Module5",
    component: Module5,
  },
  {
    path: "/leidingdga",
    name: "Module6",
    component: Module6,
  },
  {
    path: "/familie-geleid",
    name: "Module7",
    component: Module7,
  },
  {
    path: "/familie-geleid2",
    name: "Module8",
    component: Module8,
  },
  {
    path: "/familie-gecontroleerd",
    name: "Module9",
    component: Module9,
  },
  {
    path: "/eigenarenstrategie",
    name: "Module10",
    component: Module10,
  },
  {
    path: "/eigendomsstrategie",
    name: "Module11",
    component: Module11,
  },
  {
    path: "/opvolging",
    name: "Module12",
    component: Module12,
  },
  {
    path: "/loopbaan",
    name: "Module13",
    component: Module13,
  },
  {
    path: "/beloning",
    name: "Module14",
    component: Module14,
  },
  {
    path: "/socialmedia",
    name: "Module15",
    component: Module15,
  },
  {
    path: "*",
    component: Start,
    name: "Start",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
