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
                            <span class="label font-weight-400">91.86713539442127</span>
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
                    <h3 class="panel-title">Block</h3>
                </header>

                <div class="col-xs-12 col-md-12">
                    <div class="panel panel-default">
                        <div style="padding-left:25px;padding-right:25px;" class="panel-heading">
                            <div class="row">
                                <a href="/block/00000000022c91274e30e096287c656c3a5975029539a87fc138d602c969eac7">
                                    <span data-toggle="tooltip" data-placement="top" title="Previous" class="glyphicon glyphicon-chevron-left iquidus block-last"
                                        style="color: rgb(211, 211, 224);"> </span>
                                </a>
                                <strong class="hidden-xs">GEEK block: 00000000003471326ebf89ea39605562af0c3e6364171a57e3a8783b8928a62c</strong>
                                <a href="/block/0000000001663cdbb193ec749643322770c5160c8accaf6faf358c4fdca14d40">
                                    <span data-toggle="tooltip" data-placement="top" title="Next" class="glyphicon glyphicon-chevron-right iquidus pull-right block-next"
                                        style="color: rgb(211, 211, 224);"> </span>
                                </a>
                                <a href="/api/getblock?hash=00000000003471326ebf89ea39605562af0c3e6364171a57e3a8783b8928a62c">
                                    <span class="glyphicon glyphicon-info-sign iquidus pull-right" style="color: rgb(211, 211, 224);"></span>
                                </a>
                            </div>
                        </div>
                        <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline">
                            <thead>
                                <tr>
                                    <th>Height</th>
                                    <th>Difficulty</th>
                                    <th>Confirmations</th>
                                    <th class="hidden-xs">Size (kB)</th>
                                    <th class="hidden-xs">Bits</th>
                                    <th class="hidden-xs">Nonce</th>
                                    <th class="hidden-xs">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="danger">
                                    <td>78273</td>
                                    <td>112.7908</td>
                                    <td>2</td>
                                    <td class="hidden-xs">0.23</td>
                                    <td class="hidden-xs">1c024508</td>
                                    <td class="hidden-xs">451892992</td>
                                    <td class="hidden-xs">5th Jul 2018 01:19:34</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Latest Transactions</h4>
                        </div>
                        <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline">
                            <thead>
                                <tr>
                                    <th class="hidden-xs">Hash</th>
                                    <th>Recipients</th>
                                    <th>Amount (GEEK)</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="hidden-xs">
                                        <a href="/tx/09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189">09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189</a>
                                    </td>
                                    <td>1</td>
                                    <td>2784.66666666</td>
                                    <td class="text-center">
                                        <a href="/tx/09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- End Page -->
</template>