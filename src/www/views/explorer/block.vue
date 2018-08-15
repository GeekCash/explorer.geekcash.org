<template>

    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">
            <layout></layout>
            <div class="panel">
                <div class="col-xs-12 col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-md-1">
                                    <router-link :to="'/block/'+ blkinfo.prv" v-if="blkinfo.prv" class="float-left">
                                        <span class="fa fa-chevron-left iquidus"></span>
                                    </router-link>
                                </div>
                                <div class="col-md-8">
                                    <strong class="float-left">GEEK block: {{blkinfo._id}}</strong>
                                </div>

                                <div class="col-md-3">
                                    <router-link :to="'/block/' + blkinfo.nxt" v-if="blkinfo.nxt" class="float-right">
                                        <span class="fa fa-chevron-right iquidus"></span>
                                    </router-link>
                                </div>


                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline">
                                <thead>
                                    <tr>
                                        <th style="width: 10%">Height</th>
                                        <th style="width: 20%">Difficulty</th>
                                        <th style="width: 10%">Confirmations</th>
                                        <th style="width: 10%">Size</th>
                                        <th style="width: 10%">Bits</th>
                                        <th style="width: 20%">Nonce</th>
                                        <th style="width: 20%">Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-info">
                                        <td>{{blkinfo.idx}}</td>
                                        <td>{{blkinfo.diff}}</td>
                                        <td>{{overview.blocks - blkinfo.idx}}</td>
                                        <td>{{_.toKb(blkinfo.sz)}}B</td>
                                        <td>{{blkinfo.bits}}</td>
                                        <td>{{blkinfo.n}}</td>
                                        <td>{{ blkinfo.tt | moment("YYYY-MM-DD h:mm:ss A")}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <strong>Latest Transactions</strong>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline">
                                <thead>
                                    <tr>
                                        <th class="hidden-xs">Hash</th>
                                        <th>Recipients</th>
                                        <th>Amount (GEEK)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="datatx" v-for="tx in datatx.docs">
                                        <td class="hidden-xs">
                                            <router-link :to="'/tx/'+ tx._id">{{tx._id}}</router-link>
                                        </td>
                                        <td>{{tx.out.length}}</td>
                                        <td>{{ _.numberFormat(tx.val, 8)}}</td>
                                        <td class="text-center">
                                            <router-link :to="'/tx/' + tx._id">
                                                <i class="fa fa-eye table-eye"></i>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- End Page -->
</template>

<script>
    import moment from 'moment';
    import { mapGetters } from "vuex";
    import Layout from "../layout.vue";

    export default {
        components: {
            "layout": Layout
        },
        computed: {
            ...mapGetters({
                blkinfo: "binfo",
                overview: "overview",
                datatx: "tx"

            })
        },
        methods: {
            blockinfo() {
                if (this.$route.params.id) {
                    this.$store.dispatch("BLOCK_INFO", { id: this.$route.params.id });
                    this.$store.dispatch("TX_FETCH", { search: this.$route.params.id });
                }
            }
            
        },

        created() {
            this.blockinfo();
        },

        watch: {
            $route: "blockinfo"
        },

    };
</script>