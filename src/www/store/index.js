import Vue from "vue";
import Vuex from "vuex";
import overview from "./modules/overview";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'prod',
  modules: {
    overviews: overview
  }

})

export default store