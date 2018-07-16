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
                            <span class="label  font-weight-400">91.86713539442127</span>
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
                    <h3 class="panel-title">Movement</h3>
                </header>
                <div class="panel-body">
                        <mix-table :data="data" css="table table-hover table-striped table-bordered" ref="mixtable" @mixtable:fetch="txfetch" :limit=15>
                          
                            <mix-table-column data-field="tt" label="timestamp" type="slot" target="time"  width="25%"></mix-table-column>
                            <mix-table-column data-field="_id" label="txid" type="slot" target="txid"  width="60%" ></mix-table-column>
                            <mix-table-column data-field="val" label="amount" type="slot"  width="15%" target="val"></mix-table-column>


                            <template  slot="time" slot-scope="props">
                                <span>{{timestamp(props.value)}}</span>
                            </template>

                            <template slot="txid" slot-scope="props">
                                <a target="_blank" :href="'/tx/'+ props.row._id">{{props.value}}</a>
                            </template>
               
                            <template slot="val" slot-scope="props">
                                <span class="badge badge-table badge-warning">{{props.value}}</span>
                            </template>
                        </mix-table>

                </div>
            </div>


        </div>
    </div>
    <!-- End Page -->
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
                txfetch(params) { 
                    this.$store.dispatch("TX_FETCH", params);
                },
                timestamp(val){
                     return  moment.unix(val).format('Do MMM YYYY HH:mm:ss'); 
                }
            },
            
        };
    </script>
