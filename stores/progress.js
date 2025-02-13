import {defineStore} from 'pinia'
import {ref, computed} from 'vue'


export const useProgressStore = defineStore('progress',() => {
    const counter = ref(0)
    const max = ref(100)
    const increment = () => {
        counter.value++
    }

    const pourcentage = computed({
        get() {
            return Math.round(counter.value / max.value * 100)
        }
})

    return {
        counter,
        increment,
        max,
        pourcentage
    }
})