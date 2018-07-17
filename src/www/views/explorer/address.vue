<template>

    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">
             <layout></layout>
            <div class="panel">
                <div class="col-xs-12 col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                                <strong class="hidden-xs">Address: {{address._id}}</strong>
                        </div>
                        <div class="table-responsive">
                        <table class="table table-hover table-bordered dataTable table-striped">
                            <thead>
                                <tr>
                                    <th style="width: 33%">Total Sent (GEEK)</th>
                                    <th style="width: 33%">Total Received (GEEK)</th>
                                    <th style="width: 33%">Balance (GEEK)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{address.sent}}</td>
                                    <td>{{address.rec}}</td>
                                    <td>{{address.bl}}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <strong>Latest Transactions</strong>
                        </div>

                        <div class="panel-body table-responsive">
                                <mix-table :data="data" css="table table-hover table-striped table-bordered"  ref="mixtable" @mixtable:fetch="txfetch" :limit=15>
                                  
                                    <mix-table-column data-field="tt" label="Timestamp" type="slot" target="time"  width="25%"></mix-table-column>
                                    <mix-table-column data-field="_id" label="Txid" type="slot" target="txid"  width="60%" ></mix-table-column>
                                    <mix-table-column data-field="val" label="Amount" type="slot"  width="15%" target="val"></mix-table-column>
        
        
                                    <template  slot="time" slot-scope="props">
                                        <span></span>
                                    </template>
        
                                    <template slot="txid" slot-scope="props">
                                        <router-link  :to="'/tx/'+ props.row._id"></router-link>
                                    </template>
                       
                                    <template slot="val" slot-scope="props">
                                        <span v-if="props.value > settings.high_flag" class="badge badge-table badge-danger"></span>
                                        <span v-else-if="props.value > settings.low_flag" class="badge badge-table badge-warning"></span>
                                        <span v-else class="badge badge-table badge-success"></span>
                                    </template>
                                </mix-table>
        
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
    import Layout from "../layout.vue";

    export default {
         components: {
            "layout": Layout
         },
        computed: {
            ...mapGetters({
                address: "address"
            })
        },
        methods: {
            txfetch(){
                console.log();
            },
            addressinfo() {
                if (this.$route.params.id) {
                    this.$store.dispatch("ADDRESS_INFO", { id: this.$route.params.id });
                }
            }
        },

        created() {
            this.addressinfo();
        },

        watch: {
            $route: "addressinfo"
        },

    };
</script>