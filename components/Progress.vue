<template>
    <main>
        <div id="pourcentage">
            {{ progress.pourcentage }} %
        </div>
        <button id="increment-btn" @click="progress.increment()">+1</button>
    </main>
</template>

<script  lang="ts">

    import { useProgressStore } from '../stores/progress'
    export default {
        setup() {
            const progress = useProgressStore()
            return {
                progress
            }
        }
    }
</script>



<style scoped></style>