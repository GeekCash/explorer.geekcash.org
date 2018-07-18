<template>
    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">
            <layout></layout>
            <div class="panel">
                <header class="panel-heading">
                    <div class="panel-actions"></div>
                    <h3 class="panel-title">Latest Transactions</h3>
                </header>
                <div class="panel-body table-responsive">
                    <mix-table :data="data" css="table table-hover table-striped table-bordered" ref="mixtable" @mixtable:fetch="walletsfetch"
                        :limit=15>

                        <mix-table-column data-field="_id"  label="Payee" type="slot"  target="Payee"  width="30%"></mix-table-column>
                        <mix-table-column data-field="bl"  label="Balance (GEEK)" type="slot" target="bl" width="25%"></mix-table-column>
                        <mix-table-column data-field="sent" label="Sent (GEEK)" type="slot"     target="sent"  width="25%"></mix-table-column>
                        <mix-table-column data-field="rec" label="Received (GEEK)" type="slot"  target="rec"  width="25%" ></mix-table-column>                      


                        <template slot="Payee" slot-scope="props">
                            <router-link :to="'/address/'+ props.row._id">{{props.value}}</router-link>
                        </template>

                        <template slot="bl" slot-scope="props">
                            <span>{{_.numberFormat(props.value, 2)}}</span>
                        </template>

                        <template slot="sent" slot-scope="props">
                                <span>{{_.numberFormat(props.value, 2)}}</span>
                        </template>

                        <template slot="rec" slot-scope="props">
                            <span>{{_.numberFormat(props.value, 2)}}</span>
                        </template>

                     

                    </mix-table>

                </div>
            </div>


        </div>
    </div>
    <!-- End Page -->

</template>
<script>

    import Layout from "../layout.vue";
    import MixTable from "v-mix-table";
    import { mapGetters } from "vuex";

    export default {
        components: {
            "layout": Layout
        },
        computed: {
            ...mapGetters({
                data: "datawallets",
            })
        },
        methods: {
            walletsfetch(params) {
                this.$store.dispatch("WALLETS_FETCH", params);
            }
        },

    };
</script>