import api from "./../../api";
import {TX_FETCH, TX_FETCH_SUCCESS, TX_INFO, TX_INFO_SUCCESS, BLOCK_FETCH, BLOCK_INFO, BLOCK_FETCH_SUCCESS, BLOCK_INFO_SUCCESS } from "../const";

export default {
  state: {
    datatx: {
        rows: [],
        total: 0,
    },
    datablock:{
        rows: [],
        total: 0,
    },
    txinfo: {},
    blockinfo: {}
  },
  mutations: {

    [TX_FETCH_SUCCESS](state, data) {
      // console.log(data);
        state.datatx = data;  
    },
    [TX_INFO_SUCCESS](state, data) {
        // console.log(data);
        state.txinfo= data;
    },
    [BLOCK_FETCH_SUCCESS](state, data) {
        state.txinfo= data;
    },
    [BLOCK_INFO_SUCCESS](state, data) {
      // console.log(data);
        state.blockinfo= data;
    },
  },

  getters: {
    tx: state => state.datatx,
    txinfo: state  => state.txinfo,
    block: state => state.datablock,
    binfo: state => state.blockinfo,
  },

  actions: {
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
    [BLOCK_FETCH]({ commit }, payload) {
      return api.post("/block/fetch", payload).then(({ data }) => {
            commit("BLOCK_INFO_SUCCESS", data);
        })
    },
    [BLOCK_INFO]({ commit }, payload) {
      return api.post("/block/info", payload).then(({ data }) => {
            commit("BLOCK_INFO_SUCCESS", data);
        })
    }
  },
};
