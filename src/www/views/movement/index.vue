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
                            <span>{{props.value | moment("YYYY-MM-DD h:mm:ss A")}}</span>
                        </template>

                        <template slot="txid" slot-scope="props">
                            <router-link :to="'/tx/'+ props.row._id">{{props.value}}</router-link>
                        </template>

                        <template slot="val" slot-scope="props">
                            <span v-if="props.value > settings.high" class="text-success">{{ _.numberFormat(props.value,8)}}</span>
                            <span v-else-if="props.value > settings.mid" class="text-primary">{{_.numberFormat(props.value,8)}}</span>
                            <span v-else class="text-muted">{{_.numberFormat(props.value,8)}}</span>
                        </template>
                    </mix-table>

                </div>
            </div>

        </div>
    </div>
    <!-- End Page -->
</template>


<script>

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

        // mounted() {

        //     this.$store.dispatch("TX_FETCH", { page: 1, offset: 0, pageSize: 15, limit: 15 });

        // },
        methods: {
            txfetch(params) {
                this.$store.dispatch("TX_FETCH", params);
            }

        },
        created() {
            this.settings = config.movement;
        },

    };
</script>