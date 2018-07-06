import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    
    { path: "/", component: () => import("../views/explorer/index.vue") },    
    { path: "/tx", component: () => import("../views/explorer/tx.vue") },  
    { path: "/block", component: () => import("../views/explorer/block.vue") },  
    { path: "/richlist", component: () => import("../views/richlist/index.vue") },
    { path: "/network", component: () => import("../views/network/index.vue") },
    { path: "/movement", component: () => import("../views/movement/index.vue") },
    { path: "/info", component: () => import("../views/info/index.vue") },
    { path: "*", component: () => import("../views/404.vue") },

  ]
});

