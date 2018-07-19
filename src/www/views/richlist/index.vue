<template>
<!-- Page -->
<div class="page">
    <div class="page-content container-fluid">

        <layout></layout>

        <div class="row">

            <div class="col-lg-12 col-md-12 col-xs-12">
               <div>
                 <vue-highcharts :options="Options" ref="Charts"></vue-highcharts>
              </div>
                
            </div>
            <div class="col-md-12">
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
                                                <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline" role="grid" aria-describedby="DataTables_Table_0_info" style="width: 1611px;">
                                                    <thead>
                                                        <tr role="row">
                                                            <th class="sorting_asc text-center" x>
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

        </div>
    </div>
</div>
<!-- End Page -->
</template>

<script>
import Layout from "../layout.vue";
import { mapGetters } from "vuex";
import VueHighcharts from "vue2-highcharts";
export default {
    data() {
        var $this = this;
        return {
            Options: {
                colors: ['#d9534f','#5cb85c','#428bca', '#2a2c3d', '#cccccc'],
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    },
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        },
                        stops: [
                            [0, '#1e1f2c'],
                            [1, '#1e1f2c']
                        ]
                    },
                    style: {
                        fontFamily: 'Roboto,sans-serif'
                    },
                    plotBorderColor: '#606063'
                },
                title: {
                    text: 'Wealth Distribution',
                    style: {
                        color: '#a6a6c1',
                        fontSize: '15px',
                        fontWeight: 'bold',
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                    backgroundColor: '#2a2c3d',
                    style: {
                        color: '#F0F0F0'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name} : {point.y:.1f}%'
                        },
                    },
                    series: {
                        dataLabels: {
                            color: '#fff'
                        },
                        borderColor: "#1e202d",
                        marker: {
                            lineColor: '#fff'
                        },
                        boxplot: {
                            fillColor: '#fff'
                        },
                        candlestick: {
                            lineColor: '#fff'
                        },
                        errorbar: {
                            color: '#fff'
                        }
                    }
                },
                credits: false,
                series: []
            }
        }
    },
    components: {
        "layout": Layout,
         VueHighcharts
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
       
        caculator(val) {
            if (this.overview.supply > 0 && this.data.rows.length > 0) {
                this.$store.dispatch("CACULATOR_WALLET");
                let pieCharts = this.$refs.Charts;
                 pieCharts.addSeries(this.chartData);
            }
        },
    },
    created() {
        this.$store.dispatch("WALLETS_FETCH", { limit: 100 })
    },
    watch: {
       
        overview: "caculator",
        data: "caculator"
    },
};
</script>
