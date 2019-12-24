import Vue from "vue";
import Router from "vue-router";
import Hoc from "@/components/Hoc";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hoc",
      component: Hoc
    }
  ]
});
