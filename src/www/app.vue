<template>
    <div class="main">
        <navbar></navbar>
        <transition name="fade" mode="out-in">
            <router-view class="view" keep-alive :key="$route.fullPath"></router-view>
        </transition>
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