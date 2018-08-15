<template>
    <div class="main">
        <navbar></navbar>
        <overview></overview>
        <transition name="fade" mode="out-in">
            <router-view class="view" keep-alive :key="$route.fullPath"></router-view>
        </transition>
    </div>
</template>
<script>
    import Navbar from "./views/navbar.vue";
    import Overview from "./views/overview.vue";

    export default {

        components: {
            "navbar": Navbar,
            "overview": Overview
        },
    };
</script>