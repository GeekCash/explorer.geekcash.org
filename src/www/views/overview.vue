<template>

    <div class="page">
        <div class="overview container-fluid">
            <div class="row">
                <!-- First Row -->
                <div class="col-xl-3 col-md-6 info-panel">

                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">Network</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">{{_.toKb(overview.hashrate ,2)}}H</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 info-panel">
                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">Difficulty</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">{{_.numberFormat(overview.difficulty,6)}}</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 info-panel">
                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">Coin Supply (GEEK)</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">{{_.numberFormat(overview.supply, 2)}}</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 info-panel">
                    <div class="panel text-center">
                        <div class="panel-heading">
                            <h3 class="panel-title">Masternodes</h3>
                        </div>
                        <div class="panel-body">
                            <span class="label font-weight-400">{{overview.masternodes}}</span>
                        </div>
                    </div>
                </div>
                <!-- End First Row -->
            </div>
        </div>
    </div>
</template>


<script>
    import {
        mapGetters
    } from "vuex";

    export default {



        computed: {
            ...mapGetters({
                overview: "overview"
            })
        },
        methods: {
            overviewfech() {
                this.$store.dispatch("OVERVIEW")
            }
        },


        mounted() {
            var _this = this;

            clearInterval(_this.timer);

            this.$store.dispatch("OVERVIEW");

            _this.timer = setInterval(function () {
                _this.$store.dispatch("OVERVIEW")
            }, 60000);

        }

    };
</script>