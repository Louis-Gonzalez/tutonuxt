<template>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
</template>

<script setup lang="ts">
    const route = useRoute()
    console.log(route.params.id)
    const { data : post } = useFetch(() =>'https://jsonplaceholder.typicode.com/posts/' + route.params.id)
</script>