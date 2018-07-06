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
                        <div class="panel-heading hidden-xs">
                            <strong>GEEK txid: 09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189</strong>
                            <a href="/api/getrawtransaction?txid=09c67c91f6c5626a1713d52a17365d9a3d9dbf5d43d6e2153e561ef629d2e189&amp;decrypt=1">
                                <span class="glyphicon glyphicon-info-sign iquidus pull-right" style="color: rgb(211, 211, 224);"></span>
                            </a>
                        </div>
                        <table class="table table-hover table-bordered dataTable table-striped w-full dtr-inline" id="left-table">
                            <thead>
                                <tr>
                                    <th>Confirmations</th>
                                    <th class="hidden-xs">Block Hash</th>
                                    <th>Timestamp</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="danger">
                                    <td>17</td>
                                    <td class="hidden-xs">
                                        <a href="/block/00000000003471326ebf89ea39605562af0c3e6364171a57e3a8783b8928a62c">00000000003471326ebf89ea39605562af0c3e6364171a57e3a8783b8928a62c</a>
                                    </td>
                                    <td>5th Jul 2018 01:19:34</td>
                                    <td class="text-center">
                                        <a href="/block/00000000003471326ebf89ea39605562af0c3e6364171a57e3a8783b8928a62c">
                                            <span class="fa fa-info"></span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <strong>Input Addresses</strong>
                                    <span class="glyphicon glyphicon-arrow-right pull-right hidden-xs"></span>
                                </div>
                                <table class="table table-bordered table-striped summary-table" id="left-table">
                                    <thead>
                                        <tr>
                                            <th>Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="text-align:center" class="info">
                                            <td>New Coins</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <strong>Recipients</strong>
                                </div>
                                <table class="table table-bordered table-striped summary-table left-table" id="left-table">
                                    <thead>
                                        <tr>
                                            <th>Address</th>
                                            <th class="hidden-xs">Amount (GEEK)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="/address/GQZEBS1tdu4pZTxezjsR54zvTp9kAAi5tg" class="loading">GQZEBS1tdu4pZTxezjsR54zvTp9kAAi5tg</a>
                                            </td>
                                            <td class="success hidden-xs"> 2784.66666666</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="footer-padding"></div>
                </div>


            </div>
        </div>
    </div>
    <!-- End Page -->
</template>