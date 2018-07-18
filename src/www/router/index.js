import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: "/", component: () => import("../views/explorer/index.vue") },    
    { path: "/tx/:id?", component: () => import("../views/explorer/tx.vue") },  
    { path: "/block/:id?", component: () => import("../views/explorer/block.vue") },  
    { path: "/richlist", component: () => import("../views/richlist/index.vue") },
    { path: "/masternodes", component: () => import("../views/masternodes/index.vue") },
    { path: "/movement", component: () => import("../views/movement/index.vue") },
    { path: "/address/:id?", component: () => import("../views/wallets/address.vue") },
    { path: "/wallets", component: () => import("../views/wallets/index.vue") },
    { path: "*", component: () => import("../views/404.vue") },

  ]
});

