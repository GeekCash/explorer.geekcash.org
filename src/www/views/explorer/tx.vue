<template>
    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">
            <div class="panel">
                <div class="col-xs-12 col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading hidden-xs">
                            <strong>Tx: {{txinfo._id}}</strong>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered dataTable table-striped w-full dtr-inline">
                                <thead>
                                    <tr>
                                        <th style="width: 15%;">Confirmations</th>
                                        <th style="width: 60%;">Block Hash</th>
                                        <th style="width: 20%;">Timestamp</th>
                                        <th style="width: 5%;"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr :class="{ 'table-warning': !txinfo.bid, 'table-info': txinfo.bid }">
                                        <td v-if="!txinfo.bid">
                                            <i class="fa-spin fal fa-cog"></i> Loading...
                                        </td>
                                        <td v-else>
                                            {{overview.blocks - txinfo.idx}}
                                        </td>
                                        <td class="hidden-xs">
                                            <router-link :to="'/block/'+ txinfo.bid">{{txinfo.bid}}</router-link>
                                        </td>
                                        <td>{{ txinfo.tt | moment("YYYY-MM-DD h:mm:ss A") }}</td>
                                        <td>
                                            <router-link :to="'/block/'+ txinfo.bid">
                                                <span class="fa fa-eye table-eye"></span>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row" v-if="txinfo">
                        <div class="col-md-6">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <strong>Input Addresses</strong>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped summary-table">

                                        <thead>
                                            <tr v-if="txinfo.in && txinfo.in[0]._id == 'coinbase'">
                                                <th>Address</th>
                                            </tr>

                                            <tr v-else>
                                                <th>Address</th>
                                                <th> Amount (GEEK)</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-if="txinfo.in && txinfo.in[0]._id == 'coinbase'" style="text-align:center">
                                                <td class="badge-info">New Coins</td>
                                            </tr>

                                            <tr v-else v-for="addresses in txinfo.in">
                                                <td>
                                                    <router-link :to="'/address/'+ addresses._id" class="loading">{{addresses._id}}</router-link>
                                                </td>
                                                <td class="badge-danger">{{ _.numberFormat(addresses.val,8)}}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <strong>Recipients</strong>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped summary-table left-table">
                                        <thead>
                                            <tr>
                                                <th>Address</th>
                                                <th>Amount (GEEK)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="txinfo.out &&txinfo.out.length > 0" v-for="r in txinfo.out">
                                                <td>
                                                    <router-link :to="'/address/'+ r._id">{{r._id}}</router-link>
                                                </td>
                                                <td class="badge-success">{{ _.numberFormat(r.val,8)}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- End Page -->
</template>


<script>
    import { mapGetters } from "vuex";

    export default {
        data: function () {
            return {
                t: null,
            }
        },

        computed: {
            ...mapGetters({
                txinfo: "txinfo",
                overview: "overview"
            })
        },
        methods: {
            TXInfo() {
                if (this.$route.params.id) {
                    this.$store.dispatch("TX_INFO", { id: this.$route.params.id });
                }
            }

        },

        mounted() {
            this.TXInfo();
        },

        watch: {
            $route: "TXInfo"
        },

    };
</script>