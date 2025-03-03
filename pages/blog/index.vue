<template>
    <h1>This is the Datas page</h1>

    <div v-if="status === 'pending'">Chargement...</div>
    <div v-else-if="status === 'error'">Erreur : {{ error?.message }}</div>
    
    <article v-else>
        <div v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.id }}</p>
            <p>{{ post.body.slice(0, 100) }}</p>
            <p><NuxtLink :to="`/blog/${post.id}`">Read more...</NuxtLink></p>
        </div>
    </article>
</template>

<script setup lang="ts">

    const { data: posts } = await useAsyncData('posts', () =>
        $fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    );

</script>

