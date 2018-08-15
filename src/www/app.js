import './css/main.css'

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";
import Validate from "vee-validate";

import NProgress from 'vue-nprogress';
import Moment from 'vue-moment';
import _ from 'mix-dash';

Vue.use(_);

Vue.use(Moment);

Vue.use(Validate);
Vue.use(NProgress);


const nprogress = new NProgress();

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// create the app instance.
// here we inject the router, store and ssr context to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

const app = new Vue({
  nprogress,
  router,
  store,
  render: h => h(App)
});

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };