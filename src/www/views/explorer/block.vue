<template>

    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">
            <div class="row">
                <!-- First Row -->
                <div class="col-xl-3 col-md-6 info-panel">

                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">Network (MH/s)</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">6421.8892</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 info-panel">
                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">Difficulty</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">91.86713539442127</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 info-panel">
                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">Coin Supply (GEEK)</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">428754652.0485148</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 info-panel">
                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">BTC Price</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">0.00000000</span>
                        </div>
                    </div>
                </div>
                <!-- End First Row -->
            </div>


            <div class="panel">
                <div class="col-xs-12 col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <a :href="'/block/'+ blkinfo.prv">
                                    <span class="fa fa-chevron-left iquidus block-last"></span>
                                </a>
                                <strong class="hidden-xs">GEEK block: {{blkinfo._id}}</strong>
                            </div>
                        </div>
                        <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline">
                            <thead>
                                <tr>
                                    <th>Height</th>
                                    <th>Difficulty</th>
                                    <th>Confirmations</th>
                                    <th class="hidden-xs">Size (kB)</th>
                                    <th class="hidden-xs">Bits</th>
                                    <th class="hidden-xs">Nonce</th>
                                    <th class="hidden-xs">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-danger">
                                    <td>{{blkinfo.idx}}</td>
                                    <td>{{blkinfo.diff}}</td>
                                    <td>2</td>
                                    <td class="hidden-xs">{{blkinfo.sz}}</td>
                                    <td class="hidden-xs">{{blkinfo.bits}}</td>
                                    <td class="hidden-xs">{{blkinfo.n}}</td>
                                    <td class="hidden-xs">{{timestamp(blkinfo.tt)}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <strong>Latest Transactions</strong>
                        </div>
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
                                <tr>
                                    <td class="hidden-xs">
                                        <a href="/tx/09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189">09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189</a>
                                    </td>
                                    <td>1</td>
                                    <td>2784.66666666</td>
                                    <td class="text-center">
                                        <a href="/tx/09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- End Page -->
</template>

<script>
    import moment from 'moment';
    import {
        mapGetters
    } from "vuex";

    export default {

        computed: {
            ...mapGetters({
                blkinfo: "binfo"
            })
        },
        methods: {
            blockinfo() {
                if (this.$route.params.id) {
                    this.$store.dispatch("BLOCK_INFO", { id: this.$route.params.id });
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