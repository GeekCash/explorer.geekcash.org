<template>
    <div class="main">
        <navbar></navbar>
        <transition name="fade" mode="out-in">
            <router-view class="view" keep-alive :key="$route.fullPath"></router-view>
        </transition>

        <div class="icon-bar">
            <a href="https://geekcash.org" target="_blank" class="home">
                <i class="fa fa-home"></i>
            </a>
            <a href="http://pool.geekcash.org" target="_blank" class="pool">
                <i class="fa fa-money"></i>
            </a>
            <a href="https://www.facebook.com/geekcash.org" target="_blank" class="facebook">
                <i class="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/GeekCash" target="_blank" class="twitter">
                <i class="fa fa-twitter"></i>
            </a>
            <a href="https://t.me/geekcash" target="_blank" class="telegram">
                <i class="fa fa-telegram"></i>
            </a>
        </div>
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