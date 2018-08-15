<template>

    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">
            <div class="panel">
                <div class="col-xs-12 col-md-12">
                    <div class="panel panel-default">

                        <header class="panel-heading">
                            <div class="panel-actions"></div>
                            <strong >Address: {{address._id}}</strong>
                        </header>

                        <div class="table-responsive">
                            <table class="table table-hover table-bordered dataTable table-striped text-center">
                                <thead>
                                    <tr>
                                        <th style="width: 33%">Total Sent (GEEK)</th>
                                        <th style="width: 33%">Total Received (GEEK)</th>
                                        <th style="width: 33%">Balance (GEEK)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{_.numberFormat(address.sent,2)}}</td>
                                        <td>{{_.numberFormat(address.rec, 2)}}</td>
                                        <td>{{_.numberFormat(address.bl, 2)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <header class="panel-heading">
                            <div class="panel-actions"></div>
                            <strong>Latest Transactions</strong>
                        </header>
                        <div class="table-responsive">
                            <mix-table :data="data" css="mix-table table table-hover table-striped table-bordered text-center" ref="mixtable" @mixtable:fetch="trfetch"
                                :limit=12 >

                                <mix-table-column data-field="tt" label="Timestamp" type="slot" width="25%" class="text-center" target="tt"></mix-table-column>
                                <mix-table-column data-field="tx" label="Hash" type="slot" target="Hash"  class="text-center" width="55%"></mix-table-column>
                                 <mix-table-column data-field="tp" label="Type" type="slot" target="tp"  class="text-center" width="5%"></mix-table-column>
                                <mix-table-column data-field="val" label="Amount(GEEK)" type="slot"   class="text-center" width="15%" target="val"></mix-table-column>

                                <template slot="tt" slot-scope="props">
                                    <span>{{ props.value | moment("YYYY-MM-DD h:mm:ss A")}}</span>
                                </template>

                                <template slot="Hash" slot-scope="props">
                                    <router-link :to="'/tx/'+ props.value">{{props.value}}</router-link>
                                </template>

                                <template slot="tp" slot-scope="props">
                                        <span v-if="props.value == 1" class="badge badge-success font-weight-100">IN</span>
                                        <span v-else class="badge badge-warning font-weight-100">OUT</span>
                                </template>

                                <template slot="val" slot-scope="props">
                                    <span>{{_.numberFormat(props.value, 4)}}</span>
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
    import {  mapGetters } from "vuex";
    import MixTable from "v-mix-table";


    export default {
        computed: {
            ...mapGetters({
                address: "address",
                data: "transactionfetch"
            })
        },
        methods: {
            addressinfo(params) {
                if (this.$route.params.id) {
                    this.$store.dispatch("ADDRESS_INFO", { id: this.$route.params.id });
                }
            },
            trfetch(params) {
                params.search =  this.$route.params.id;
                this.$store.dispatch("TRANSACTION_FETCH", params);
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