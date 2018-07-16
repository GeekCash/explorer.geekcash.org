
<template>
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
                            <span class="label font-weight-400">94hz</span>
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
                    <header class="panel-heading">
                        <div class="panel-actions"></div>
                        <h3 class="panel-title">Latest Transactions</h3>
                    </header>
                    <div class="panel-body">
                            <mix-table :data="data" css="table table-hover table-striped table-bordered text-center" ref="mixtable" @mixtable:fetch="tfetch" :limit=15>
                              
                                <mix-table-column data-field="idx" label="Block" type="slot" target="block" class="text-center" width="111px"></mix-table-column>
                                <mix-table-column data-field="_id" label="Hash" type="slot" target="Hash" class="text-center" width="707px" ></mix-table-column>
                                <mix-table-column label="Recipients" type="slot"  class="text-center" width="75px" target="Recipients"></mix-table-column>
                                <mix-table-column data-field="val" label="Amount (GEEK)" type="slot" target="val"  class="text-center" width="249px"></mix-table-column>
                                <mix-table-column data-field="tt" label="Timestamp" type="slot" target="time" class="text-center" width="442px"></mix-table-column>

                                <template slot="block" slot-scope="props">
                                    <a :href="'/block/'+ props.row.bid">{{props.value}}</a>
                                </template>

                                <template slot="Hash" slot-scope="props">
                                    <a target="_blank" :href="'/tx/'+ props.row._id">{{props.value}}</a>
                                </template>
                   
                                <template slot="Recipients" slot-scope="props">
                                    <span>{{props.row.idx}}</span>
                                </template>

                                <template slot="val" slot-scope="props">{{props.value}}</template>

                                <template  slot="time" slot-scope="props">
                                    <span class="text-center">{{timestamp(props.value)}}</span>
                                </template>
                            </mix-table>

                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import MixTable from "v-mix-table";
    import { mapGetters } from "vuex";

    export default {

        computed: {
            ...mapGetters({
                data: "tx",
            })
        },
        methods: {
            tfetch(params) { 
                this.$store.dispatch("TX_FETCH", params);
            },
            timestamp(val){
                 return  moment.unix(val).format('ddd ,DD MMM YYYY HH:mm:ss'); 
            }
        },
        
    };
</script>