<template>
    <div class="navbar">
        <div><NuxtLink class="item-navbar" to="/">Home</NuxtLink></div>
        <div><NuxtLink class="item-navbar" to="/about">About</NuxtLink></div>
        <div><NuxtLink class="item-navbar" to="/blog">Blog</NuxtLink></div>
        <div><NuxtLink class="item-navbar" to="/admin">Admin</NuxtLink></div>
    </div>
</template>

<style scoped>
    .navbar {
        display: flex;
    }
    .item-navbar{

        align-items: center;
        text-decoration: none;
        margin: 1rem
    }

</style>