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

            <div>
                <div class="panel panel-default">
                    <header class="panel-heading">
                        <h3 class="panel-title">API Documentation</h3>
                    </header>
                    <div class="panel-body">
                        <hr>

                        <h3>API Calls</h3>

                        <p>
                            <em>Return data from coind</em>
                        </p>

                        <ul>
                            <li>
                                <p>
                                    <strong>getdifficulty</strong>
                                    <br>
                                    <em>Returns the current difficulty.</em>
                                    <br>
                                    <a href="/api/getdifficulty">explorer.geekcash.org/api/getdifficulty</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getconnectioncount</strong>
                                    <br>
                                    <em>Returns the number of connections the block explorer has to other nodes.</em>
                                    <br>
                                    <a href="/api/getconnectioncount">explorer.geekcash.org/api/getconnectioncount</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getblockcount</strong>
                                    <br>
                                    <em>Returns the current block index.</em>
                                    <br>
                                    <a href="/api/getblockcount">explorer.geekcash.org/api/getblockcount</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getblockhash [index]</strong>
                                    <br>
                                    <em>Returns the hash of the block at ; index 0 is the genesis block.</em>
                                    <br>
                                    <a href="/api/getblockhash?index=101">explorer.geekcash.org/api/getblockhash?index=101</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getblock [hash]</strong>
                                    <br>
                                    <em>Returns information about the block with the given hash.</em>
                                    <br>
                                    <a href="/api/getblock?hash=0000002db65bb27972f43ef44fd4f86c70e4a46d21aafabeffe4c84535c04c49">explorer.geekcash.org/api/getblock?hash=0000002db65bb27972f43ef44fd4f86c70e4a46d21aafabeffe4c84535c04c49</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getrawtransaction [txid] [decrypt]</strong>
                                    <br>
                                    <em>Returns raw transaction representation for given transaction id. decrypt can be set to
                                        0(false) or 1(true).</em>
                                    <br>
                                    <a href="/api/getrawtransaction?txid=bfaeb55549b9d35cf2e626cc69d453eeec74318285c3e292e05ca6ddb744963a&amp;decrypt=0">explorer.geekcash.org/api/getrawtransaction?txid=bfaeb55549b9d35cf2e626cc69d453eeec74318285c3e292e05ca6ddb744963a&amp;decrypt=0</a>
                                    <br>
                                    <a href="/api/getrawtransaction?txid=bfaeb55549b9d35cf2e626cc69d453eeec74318285c3e292e05ca6ddb744963a&amp;decrypt=1">explorer.geekcash.org/api/getrawtransaction?txid=bfaeb55549b9d35cf2e626cc69d453eeec74318285c3e292e05ca6ddb744963a&amp;decrypt=1</a>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>getnetworkhashps</strong>
                                <br>
                                <em>Returns the current network hashrate. (hash/s)</em>
                                <br>
                                <a href="/api/getnetworkhashps">explorer.geekcash.org/api/getnetworkhashps</a>
                            </li>
                        </ul>
                        <hr>

                        <h3>Extended API</h3>

                        <p>
                            <em>Return data from local indexes</em>
                        </p>

                        <ul>
                            <li>
                                <p>
                                    <strong>getmoneysupply</strong>
                                    <br>
                                    <em>Returns current money supply</em>
                                    <br>
                                    <a href="/ext/getmoneysupply">explorer.geekcash.org/ext/getmoneysupply</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getdistribution</strong>
                                    <br>
                                    <em>Returns wealth distribution stats</em>
                                    <br>
                                    <a href="/ext/getdistribution">explorer.geekcash.org/ext/getdistribution</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getaddress (/ext/getaddress/hash)</strong>
                                    <br>
                                    <em>Returns information for given address</em>
                                    <br>
                                    <a href="/ext/getaddress/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn">explorer.geekcash.org/ext/getaddress/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getbalance (/ext/getbalance/hash)</strong>
                                    <br>
                                    <em>Returns current balance of given address</em>
                                    <br>
                                    <a href="/ext/getbalance/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn">explorer.geekcash.org/ext/getbalance/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>getlasttxs (/ext/getlasttxs/count/min)</strong>
                                    <br>
                                    <em>Returns last [count] transactions greater than [min]</em>
                                    <br>
                                    <em>Note: returned values are in satoshis</em>
                                    <br>
                                    <a href="/ext/getlasttxs/10/100">explorer.geekcash.org/ext/getlasttxs/10/100</a>
                                </p>
                            </li>
                        </ul>

                        <hr>

                        <h3>Linking (GET)</h3>

                        <p>
                            <em>Linking to the block explorer</em>
                        </p>

                        <ul>
                            <li>
                                <p>
                                    <strong>transaction (/tx/txid)</strong>
                                    <br>
                                    <a href="/tx/bfaeb55549b9d35cf2e626cc69d453eeec74318285c3e292e05ca6ddb744963a">explorer.geekcash.org/tx/bfaeb55549b9d35cf2e626cc69d453eeec74318285c3e292e05ca6ddb744963a</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>block (/block/hash)</strong>
                                    <br>
                                    <a href="/block/0000002db65bb27972f43ef44fd4f86c70e4a46d21aafabeffe4c84535c04c49">explorer.geekcash.org/block/0000002db65bb27972f43ef44fd4f86c70e4a46d21aafabeffe4c84535c04c49</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>address (/address/hash)</strong>
                                    <br>
                                    <a href="/address/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn">explorer.geekcash.org/address/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>qrcode (/qr/hash)</strong>
                                    <br>
                                    <a href="/qr/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn">explorer.geekcash.org/qr/GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-padding"></div>
            </div>
        </div>
    </div>
    <!-- End Page -->

</template>