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
                                <router-link :to="'/block/'+ blkinfo.prv" v-if="blkinfo.prv">
                                    <span class="fa fa-chevron-left iquidus block-last"></span>
                                </router-link >
                                <strong class="hidden-xs">GEEK block: {{blkinfo._id}}</strong>
                                <router-link  :to="'/block/' + blkinfo.nxt" v-if="blkinfo.nxt">
                                    <span class="fa fa-chevron-right iquidus block-next"></span>
                                </router-link>

                            </div>
                        </div>
                        <div class="table-responsive">
                        <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline">
                            <thead>
                                <tr>
                                    <th style="width: 130px">Height</th>
                                    <th style="width: 350px">Difficulty</th>
                                    <th style="width: 250px">Confirmations</th>
                                    <th style="width: 180px">Size (kB)</th>
                                    <th style="width: 180px">Bits</th>
                                    <th style="width: 200px">Nonce</th>
                                    <th >Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-danger">
                                    <td>{{blkinfo.idx}}</td>
                                    <td>{{blkinfo.diff}}</td>
                                    <td>{{overview.blocks - blkinfo.idx}}</td>
                                    <td>{{blkinfo.sz}}</td>
                                    <td>{{blkinfo.bits}}</td>
                                    <td>{{blkinfo.n}}</td>
                                    <td>{{timestamp(blkinfo.tt)}}</td>
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
                                <tr  v-if="datatx" v-for="tx in datatx.docs">
                                    <td class="hidden-xs">
                                        <router-link :to="'/tx/'+ tx._id">{{tx._id}}</router-link>
                                    </td>
                                    <td>{{tx.out.length}}</td>
                                    <td>{{tx.val}}</td>
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
                    this.$store.dispatch("TX_FETCH", {search: this.$route.params.id});
                }
            },
            timestamp(val) {
                return moment.unix(val).format('DD MMM YYYY HH:mm:ss');
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