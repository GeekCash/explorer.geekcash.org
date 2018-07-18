<template>
    <div class="row">
        <!-- First Row -->
        <div class="col-xl-3 col-md-6 info-panel">

            <div class="panel text-center">
                <div class="panel-heading">
                    <h3 class="panel-title">Network</h3>
                </div>
                <div class="panel-body">
                    <span class="label font-weight-400">{{HashRateString(overview.hashrate)}}H</span>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 info-panel">
            <div class="panel text-center">
                <div class="panel-heading">
                    <h3 class="panel-title">Difficulty</h3>
                </div>
                <div class="panel-body">
                    <span class="label font-weight-400">{{difficultyformat(overview.difficulty)}}</span>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 info-panel">
            <div class="panel text-center">
                <div class="panel-heading">
                    <h3 class="panel-title">Coin Supply (GEEK)</h3>
                </div>
                <div class="panel-body">
                    <span class="label font-weight-400">{{supplyformat(overview.supply)}}</span>
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
</template>


<script>
    
    import { mapGetters } from "vuex";
    import _ from "mix-utils";

    export default {
           computed: {
            ...mapGetters({
                overview: "overview"
                })
            },
            methods: {
                overviewfech() { 
                  this.$store.dispatch("OVERVIEW")
                },
                HashRateString(val){
                   return  _.toKb(val,2);
                },
                difficultyformat(number) {
                     return _.numberFormat(number, 6);
                },
                supplyformat(number){
                     return _.numberFormat(number, 2);
                },
            },

            created() {
               this.overviewfech();
            },

            watch: {
                $route: "overviewfech"
            },
        };
    </script>

