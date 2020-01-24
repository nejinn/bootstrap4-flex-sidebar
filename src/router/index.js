import Vue from "vue";
import VueRouter from "vue-router";

const container1 = () => import("../views/container1.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "container1",
    component: container1,
    meta: {
      title: "布局1",
      icon: "columns-gutters"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
