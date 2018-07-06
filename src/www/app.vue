<template>
    <div class="main">
        <navbar></navbar>
        <transition name="fade" mode="out-in">
            <router-view class="view" keep-alive :key="$route.fullPath"></router-view>
        </transition>
        <footer class="site-footer fixed-bottom">
            <div class="site-footer-legal">
                Powered by Iquidus Explorer
            </div>
            <div class="site-footer-right">
                <i class="red-600 wb wb-heart"></i>77327 blocks<a href="#">70 connections</a>
            </div>
        </footer>
    </div>
</template>
<script>
    import Navbar from "./views/navbar.vue";

    export default {

        components: {
            "navbar": Navbar
        },
    };
</script>