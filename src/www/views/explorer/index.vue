<template>
    <div class="page">
        <div class="page-content container-fluid">
            <div class="panel">
                <header class="panel-heading">
                    <div class="panel-actions"></div>
                    <h3 class="panel-title">Latest Transactions</h3>
                </header>
                <div class="panel-body">
                    <div class="table-responsive">
                        <mix-table :data="data" css="table table-hover table-striped table-bordered text-center" ref="mixtable"
                            @mixtable:fetch="txfetch" :limit=15>

                            <mix-table-column data-field="idx" label="Block" type="slot" target="block" width="110px"></mix-table-column>
                            <mix-table-column data-field="_id" label="Hash" type="slot" target="Hash" class="text-center"></mix-table-column>
                            <mix-table-column data-field="out" label="Recipients" type="slot" class="text-center" width="10%"
                                target="Recipients"></mix-table-column>
                            <mix-table-column data-field="val" label="Amount (GEEK)" type="slot" target="val" class="text-center"
                                width="15%"></mix-table-column>
                            <mix-table-column data-field="tt" label="Timestamp" type="slot" target="time" class="text-center"
                                width="20%"></mix-table-column>

                            <template slot="block" slot-scope="props">

                                <router-link class="text-center" :to="'/block/'+ props.row.bid">{{props.value}}</router-link>
                            </template>

                            <template slot="Hash" slot-scope="props">
                                <router-link :to="'/tx/'+ props.row._id">{{props.value}}</router-link>
                            </template>

                            <template slot="Recipients" slot-scope="props">
                                <span>{{props.value.length}}</span>
                            </template>

                            <template slot="val" slot-scope="props">{{_.numberFormat(props.value, 8)}}</template>

                            <template slot="time" slot-scope="props">
                                <span class="text-center">{{ props.value | moment("YYYY-MM-DD h:mm:ss A")}}</span>
                            </template>
                        </mix-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import MixTable from "v-mix-table";
    import { mapGetters } from "vuex";

    export default {
        data: function () {
            return {
                timer: null,
            }
        },
        computed: {
            ...mapGetters({
                data: "tx",
            })
        },
        mounted() {

            var _this = this;
            clearInterval(_this.timer);

            _this.timer = setInterval(function () {
                if (_this.$refs.mixtable)
                    _this.$refs.mixtable.reload();
            }, 60000);


        },
        methods: {
            txfetch(params) {
                this.$store.dispatch("TX_FETCH", params);
            },

        },

    };
</script>