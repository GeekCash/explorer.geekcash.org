<template>
    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">

            <layout></layout>

            <div class="panel">
                <header class="panel-heading">
                    <div class="panel-actions"></div>
                    <h3 class="panel-title">Movement</h3>
                </header>
                <div class="panel-body table-responsive">
                    <mix-table :data="data" css="table table-hover table-striped table-bordered" ref="mixtable" @mixtable:fetch="txfetch" :limit=15>

                        <mix-table-column data-field="tt" label="Timestamp" type="slot" target="time" width="25%"></mix-table-column>
                        <mix-table-column data-field="_id" label="Txid" type="slot" target="txid" width="60%"></mix-table-column>
                        <mix-table-column data-field="val" label="Amount" type="slot" width="15%" target="val"></mix-table-column>


                        <template slot="time" slot-scope="props">
                            <span>{{timestamp(props.value)}}</span>
                        </template>

                        <template slot="txid" slot-scope="props">
                            <router-link :to="'/tx/'+ props.row._id">{{props.value}}</router-link>
                        </template>

                        <template slot="val" slot-scope="props">
                            <span v-if="props.value > settings.high_flag" class="badge badge-table badge-danger">{{props.value}}</span>
                            <span v-else-if="props.value > settings.low_flag" class="badge badge-table badge-warning">{{props.value}}</span>
                            <span v-else class="badge badge-table badge-success">{{props.value}}</span>
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
    import config from '../../config';
    import Layout from "../layout.vue";
    import MixTable from "v-mix-table";
    import { mapGetters } from "vuex";

    export default {
        data() {
            return {
                settings: "",
            }
        },
        components: {
            "layout": Layout
        },
        computed: {
            ...mapGetters({
                data: "tx",
            })
        },

        mounted() {

            this.$store.dispatch("TX_FETCH", { page: 1, offset: 0, pageSize: 15, limit: 15 });

        },
        methods: {
            txfetch(params) {
                this.$store.dispatch("TX_FETCH", params);
            },
            timestamp(val) {
                return moment.unix(val).format('Do MMM YYYY HH:mm:ss');
            }
        },
        created() {
            this.settings = config.movement;
        },

    };
</script>