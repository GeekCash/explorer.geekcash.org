<template>
    <div class="main-nav">
        <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse bg-indigo-600" role="navigation">

            <div class="navbar-header">
                <button type="button" class="navbar-toggler hamburger hamburger-close navbar-toggler-left hided" data-toggle="menubar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="hamburger-bar"></span>
                </button>
                <button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
                    <i class="icon wb-more-horizontal" aria-hidden="true"></i>
                </button>
                <div class="navbar-brand navbar-brand-center">
                    <a href="/">
                        <img class="navbar-brand-logo" src="../favicon/logo-w.png" title="geekcash">
                    </a>
                </div>
            </div>

            <div class="navbar-container container-fluid">
                <div id="site-navbar-collapse" class="collapse navbar-collapse navbar-collapse-toolbar">
                    <div class="row">
                        <div class="col-lg-5 col-md-7 col-12"></div>
                        <div class="col-lg-7 col-md-5 hidden-sm">
                            <ul class="nav navbar-toolbar float-right navbar-right navbar-toolbar-right">
                                <li class="nav-item">
                                    <form class="form-inline">
                                        <input class="form-control" id="navSearch" type="search" placeholder="You may enter a block height, block hash, tx hash or address."
                                            aria-label="Search">
                                        <button type="submit" class="btn navbutton">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="site-menubar site-menubar-light">
            <div class="site-menubar-body">
                <ul class="site-menu" data-plugin="menu">
                    <li class="site-menu-item">
                        <a href="/" class="">
                            <i aria-hidden="true" class="fa fa-search site-menu-icon"></i>
                            <span class="site-menu-title">Explorer</span>
                        </a>
                    </li>
                    <li class="site-menu-item">
                        <a href="/movement" class="">
                            <i aria-hidden="true" class="fa fa-money site-menu-icon"></i>
                            <span class="site-menu-title">Movement</span>
                        </a>
                    </li>
                    <li class="site-menu-item">
                        <a href="/network" class="">
                            <i aria-hidden="true" class="fa fa-share-alt site-menu-icon"></i>
                            <span class="site-menu-title">Network</span>
                        </a>
                    </li>
                    <li class="site-menu-item">
                        <a href="/richlist" class="">
                            <i aria-hidden="true" class="fa fa-btc site-menu-icon"></i>
                            <span class="site-menu-title">Top 100</span>
                        </a>
                    </li>
                    <li class="site-menu-item">
                        <a href="/info" class="">
                            <i aria-hidden="true" class="fa fa-info site-menu-icon"></i>
                            <span class="site-menu-title">API</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>