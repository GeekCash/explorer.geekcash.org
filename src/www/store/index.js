import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'prod',
  modules: {
    
  }

})

export default store