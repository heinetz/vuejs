import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";
import Display from "../views/Display.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/",
    name: "Display",
    component: Display
  }
];

const router = new VueRouter({
  routes
});

export default router;
