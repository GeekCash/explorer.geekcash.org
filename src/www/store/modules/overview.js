import api from "./../../api";
export default {
    state: {
        overview: {
            hashrate: 0,
            difficulty: 0,
            supply: 0,
            masternodes: 0,

        },
        transactionfetch:{
            rows: [],
            total: 0,
        },
        char: {
            top25: {
                value: 0,
                percent: 0
            },
            top50: {
                value: 0,
                percent: 0
            },
            top75: {
                value: 0,
                percent: 0
            },
            top100: {
                value: 0,
                percent: 0
            },
            other: {
                value: 0,
                percent: 0
            }
        },
        datatx: {
            rows: [],
            total: 0,
        },
        datawallets: {
            rows: [],
            total: 0,
        },
        mnfetch: {
            rows: [],
            total: 0,
        },
        txinfo: {},
        blockinfo: {},
        addressinfo: {}
    },
    mutations: {
        OVERVIEW_FETCH_SUCCESS(state, data) {
            state.overview = data;
        },
        TX_FETCH_SUCCESS(state, data) {
            state.datatx = data;
        },
        TX_INFO_SUCCESS(state, data) {
            state.txinfo = data;
        },
        BLOCK_FETCH_SUCCESS(state, data) {
            state.txinfo = data;
        },
        BLOCK_INFO_SUCCESS(state, data) {
            state.blockinfo = data;
        },
        ADDRESS_INFO_SUCCESS(state, data) {
            state.addressinfo = data;
        },
        MN_FETCH_SUCCESS(state, data) {
            state.mnfetch = data;
        },
        WALLETS_FETCH_SUCCESS(state, data) {
            state.datawallets = {
                rows: data.docs,
                total: data.total
            }
        },

        TRANSACTION_FETCH_SUCCESS(state, data){
            state.transactionfetch = data;
        },
        CACULATOR_WALLET(state) {
            var sum = 0;
            var count = 0;
            var supply = state.overview.supply
            state.datawallets.rows.forEach(wallet => {
                count++;
                wallet.percent = (wallet.bl / supply) * 100
                sum += wallet.bl
                if (count == 25) {
                    state.char.top25 = {
                        value: sum,
                        percent: (sum / supply) * 100
                    }
                    sum = 0;
                } else if (count == 50) {
                    state.char.top50 = {
                        value: sum,
                        percent: (sum / supply) * 100
                    }
                    sum = 0;
                } else if (count == 75) {
                    state.char.top75 = {
                        value: sum,
                        percent: (sum / supply) * 100
                    }
                    sum = 0;
                } else if (count == 100) {
                    state.char.top100 = {
                        value: sum,
                        percent: (sum / supply) * 100
                    }
                    var otherValue = supply - (state.char.top25.value + state.char.top50.value + state.char.top75.value + state.char.top100.value)
                    state.char.other = {
                        value: otherValue,
                        percent: (otherValue / supply) * 100
                    }
                    sum = 0;
                    count = 0;
                }
            });
        }
    },

    getters: {
        overview: state => state.overview,
        tx: state => state.datatx,
        txinfo: state => state.txinfo,
        binfo: state => state.blockinfo,
        address: state => state.addressinfo,
        mnfetch: state => state.mnfetch,
        datawallets: state => state.datawallets,
        transactionfetch : state => state.transactionfetch,
        walletChar: state => {
            return [
                [" Top 1-25", state.char.top25.percent],
                [" Top 26-50", state.char.top50.percent],
                [" Top 51-75", state.char.top75.percent],
                [" Top 76-100", state.char.top100.percent],
                [" Other", state.char.other.percent]
            ]
        },
        sumCharData: state => state.char,
    },

    actions: {
        OVERVIEW({ commit }, payload) {
            return api.get("/overview", payload).then(({ data}) => {
                commit("OVERVIEW_FETCH_SUCCESS", data);
            })
        },

        TX_FETCH({ commit }, payload) {
            return api.post("/tx/fetch", payload).then(({ data }) => {
                commit("TX_FETCH_SUCCESS", data);
            })
        },

        TX_INFO({commit}, payload) {
            return api.post("/tx/info", payload).then(({data}) => {
                commit("TX_INFO_SUCCESS", data);
            })
        },
        BLOCK_INFO({ commit }, payload) {
            return api.post("/block/info", payload).then(({ data }) => {
                commit("BLOCK_INFO_SUCCESS", data);
            })
        },
        ADDRESS_INFO({ commit }, payload) {
            return api.post("/address/info", payload).then(({ data }) => {
                commit("ADDRESS_INFO_SUCCESS", data);
            })
        },
        MN_FETCH({ commit }, payload) {
            return api.post("/mn/fetch", payload).then(({ data }) => {
                commit("MN_FETCH_SUCCESS", data);
            })
        },
        WALLETS_FETCH({ commit}, payload) {
            return api.post("/address/fetch", payload).then(({ data }) => {
                commit("WALLETS_FETCH_SUCCESS", data);
                return data;
            })
        },

        CACULATOR_WALLET({ commit }) {
            commit("CACULATOR_WALLET");
        },
        TRANSACTION_FETCH({commit} , payload) {
            return api.post("/transaction/fetch", payload).then(({ data }) => {
                commit("TRANSACTION_FETCH_SUCCESS", data);
            })
        },

        SEARCH({commit}, payload) {
            return api.post("/block/info", payload).then(({ data }) => {
                if (!data) {
                    return api.post("/address/info", payload).then(({data}) => {
                        if (!data) {return api.post("/tx/info", payload).then(({data}) => {
                                if (!data) {
                                    return "NOT FOUND"
                                } else {
                                    return "TX"
                                }
                            })
                        } else {
                            return "ADDRESS"
                        }
                    })
                } else {
                    return "BLOCK"
                }
            })
        },
    },
};