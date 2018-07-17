import api from "./../../api";
import {OVERVIEW, OVERVIEW_FETCH_SUCCESS, TX_FETCH, TX_FETCH_SUCCESS, TX_INFO, TX_INFO_SUCCESS, BLOCK_FETCH, BLOCK_INFO, BLOCK_FETCH_SUCCESS, BLOCK_INFO_SUCCESS, 
     ADDRESS_INFO_SUCCESS, ADDRESS_INFO, MN_FETCH_SUCCESS, MN_FETCH 
} from "../const";

export default {
  state: {
    overview:{
          hashrate: 0,
          difficulty: 0,
          supply: 0,
          blocks: 0,
    },
    datatx: {
        rows: [],
        total: 0,
    },
    mnfetch: {
        rows: [],
        total: 0,
    },
    txinfo: {},
    blockinfo: {},
    addressinfo:{}
  },
  mutations: {
    [OVERVIEW_FETCH_SUCCESS](state, data) {
      state.overview= data;
    },
    [TX_FETCH_SUCCESS](state, data) {
        state.datatx = data;  
    },
    [TX_INFO_SUCCESS](state, data) {
        state.txinfo= data;
    },
    [BLOCK_FETCH_SUCCESS](state, data) {
        state.txinfo= data;
    },
    [BLOCK_INFO_SUCCESS](state, data) {
        state.blockinfo= data;
    },
    [ADDRESS_INFO_SUCCESS](state, data) {
        console.log(data);
        state.addressinfo= data;
    },
    [MN_FETCH_SUCCESS](state, data) {
        state.mnfetch= data;
    },
  },

  getters: {
    overview: state => state.overview,
    tx: state => state.datatx,
    txinfo: state  => state.txinfo,
    binfo: state => state.blockinfo,
    address: state => state.addressinfo,
    mnfetch: state => state.mnfetch,
  },

  actions: {
    
    [OVERVIEW]({ commit }, payload) {
      return api.get("/overview", payload).then(({ data }) => {
            commit("OVERVIEW_FETCH_SUCCESS", data);
        })
    },
    
    [TX_FETCH]({ commit }, payload) {
      return api.post("/tx/fetch", payload).then(({ data }) => {
            commit("TX_FETCH_SUCCESS", data);
        })
    },

    [TX_INFO]({ commit }, payload) {
      return api.post("/tx/info", payload).then(({ data }) => {
            commit("TX_INFO_SUCCESS", data);
        })
    },
    [BLOCK_INFO]({ commit }, payload) {
      return api.post("/block/info", payload).then(({ data }) => {
            commit("BLOCK_INFO_SUCCESS", data);
        })
    },
    [ADDRESS_INFO]({ commit }, payload) {
        return api.post("/address/info", payload).then(({ data }) => {
              commit("ADDRESS_INFO_SUCCESS", data);
          })
    },
    [MN_FETCH]({ commit }, payload) {
        return api.post("/mn/fetch", payload).then(({ data }) => {
              commit("MN_FETCH_SUCCESS", data);
          })
      },

    
  },
};
