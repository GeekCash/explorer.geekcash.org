<template>
    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">

            <layout></layout>

            <div class="row">
                <div class="col-md-8">
                    <!-- Example Tabs -->
                    <div class="example-wrap">
                        <div class="nav-tabs-horizontal" data-plugin="tabs">
                            <div class="tab-content pt-20">
                                <div class="panel">
                                    <header class="panel-heading">
                                        <div class="panel-actions"></div>
                                        <h3 class="panel-title">Top 100 - Current Balance</h3>
                                    </header>
                                    <div>
                                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">
                                            <div class="row">
                                                <div class="col-sm-12 table-responsive">
                                                    <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline"
                                                        role="grid" aria-describedby="DataTables_Table_0_info" style="width: 1611px;">
                                                        <thead>
                                                            <tr role="row">
                                                                <th class="sorting_asc text-center"x>
                                                                    <span class="fa fa-flag-checkered"></span>
                                                                </th>
                                                                <th class="sorting">Address</th>
                                                                <th class="sorting">Balance (GEEK)</th>
                                                                <th class="sorting text-center">%</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="data" v-for="(address, index) in data.rows">
                                                                <td class="text-center">{{index +1}}</td>
                                                                <td>
                                                                    <router-link :to="'/address/' + address._id">{{address._id}}</router-link>
                                                                </td>
                                                                <td>{{_.numberFormat(address.bl)}}</td>
                                                                <td class="text-center">{{_.numberFormat((address.bl / overview.supply) * 100, 2)}}</td>
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
                    <!-- End Example Tabs -->
                </div>

                <div class="col-md-4">
                    <div class="tab-content pt-20">
                        <div class="panel">
                            <header class="panel-heading">
                                <div class="panel-actions"></div>
                                <h3 class="panel-title">Wealth Distribution</h3>
                            </header>
                            <table v-show="sumCharData" class="table table-hover table-bordered dataTable table-striped w-full dtr-inline">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Amount (GEEK)</th>
                                        <th class="text-center">%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <div style="background-color:#d9534f;width:20px;height:20px;margin-right:6px;" class="pull-left"></div>
                                            <span>Top 1-25</span>
                                        </th>
                                        <td>{{_.numberFormat(sumCharData.top25.value, 2)}}</td>
                                        <td class="text-center">{{_.numberFormat(sumCharData.top25.percent, 2)}}</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div style="background-color:#5cb85c;width:20px;height:20px;margin-right:6px;" class="pull-left"></div>
                                            <span>Top 26-50</span>
                                        </th>
                                         <td>{{_.numberFormat(sumCharData.top50.value, 2)}}</td>
                                        <td class="text-center">{{_.numberFormat(sumCharData.top50.percent, 2)}}</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div style="background-color:#428bca;width:20px;height:20px;margin-right:6px;" class="pull-left"></div>
                                            <span>Top 51-75</span>
                                        </th>
                                        <td>{{_.numberFormat(sumCharData.top75.value, 2)}}</td>
                                        <td class="text-center">{{_.numberFormat(sumCharData.top75.percent, 2)}}</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div style="background-color:#222;width:20px;height:20px;margin-right:6px;" class="pull-left"></div>
                                            <span>Top 76-100</span>
                                        </th>
                                        <td>{{_.numberFormat(sumCharData.top100.value, 2)}}</td>
                                        <td class="text-center">{{_.numberFormat(sumCharData.top100.percent, 2)}}</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span>Total</span>
                                        </th>
                                        <td></td>
                                        <td class="text-center">{{_.numberFormat(100 - sumCharData.other.percent, 2)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <pie-chart :dataset="{borderColor: '#161620', borderWidth: 2}" :data="chartData" :colors="['#d9534f','#5cb85c','#428bca', '#222', '#cccccc']"></pie-chart>
                </div>

            </div>
        </div>
    </div>
    <!-- End Page -->

</template>

<script>
    import Layout from "../layout.vue";
    import { mapGetters } from "vuex";
    export default {
        components: {
            "layout": Layout
        },
        computed: {
            ...mapGetters({
                data: "datawallets",
                chartData: "walletChar",
                overview: 'overview',
                sumCharData: 'sumCharData',

            }),
        },
        methods: {
            walletsfetch() { 
                this.$store.dispatch("WALLETS_FETCH", {limit: 100 })
            },
            caculator(val){
                if(this.overview.supply > 0 && this.data.rows.length >0){
                        this.$store.dispatch("CACULATOR_WALLET");
                }
            }
        },
        created() {
            this.walletsfetch();
        },
        watch: {
            $route: "walletsfetch",
            overview:"caculator",
            data:"caculator"
        },
    };
</script>