<template>
    <!-- Page -->
    <div class="page">
        <div class="page-content container-fluid">

            <div class="panel">
                <header class="panel-heading">
                    <div class="panel-actions"></div>
                    <h3 class="panel-title">Masternodes</h3>
                </header>
                <div class="panel-body table-responsive">
                    <mix-table :data="data" css="table table-hover table-striped table-bordered" ref="mixtable" @mixtable:fetch="mnfetch"
                        :limit=15>

                        <mix-table-column data-field="ip"  label="Address"   width="15%"></mix-table-column>
                        <mix-table-column data-field="pro" label="Protocol"  width="15%"></mix-table-column>
                        <mix-table-column data-field="stt" label="Status"    type="slot"   width="15%" target="stt"></mix-table-column>
                        <mix-table-column data-field="at"  label="Active"    type="slot"   width="15%" target="at"></mix-table-column>
                        <mix-table-column data-field="ls"  label="Last Seen" type="slot"   width="15%" target="ls"></mix-table-column>
                        <mix-table-column data-field="wid" label="Payee"     width="25%" ></mix-table-column>

                        <template slot="stt" slot-scope="props">
                            <span v-if="props.value == 'ENABLED'" class="text-success">{{props.value}}</span>
                            <span v-else class="text-warning">{{props.value}}</span>
                        </template>

                        <template slot="at" slot-scope="props">
                            <span>{{props.value *1000 | duration('humanize') }}</span>
         
                       </template>
                        <template slot="ls" slot-scope="props">
                            <span>{{props.value | moment('from','now')}}</span>
                       </template>
                    </mix-table>

                </div>
            </div>
        </div>
    </div>
    <!-- End Page -->

</template>


<script>
        import MixTable from "v-mix-table";
        import { mapGetters } from "vuex";
        
        export default {
            computed: {
                ...mapGetters({
                    data: "mnfetch",
                })
            },
            methods: {
                mnfetch(params) { 
                    this.$store.dispatch("MN_FETCH", params);
                }
            },
            
        };
    </script>