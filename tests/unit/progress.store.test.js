import {beforeEach, test, describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import {createPinia, setActivePinia} from 'pinia'
import {useProgressStore} from '../../stores/progress'

describe('progress store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    test('that the counter starts at zero', () => {
        const progress = useProgressStore()
        expect(progress.counter).toBe(0)
    })
    test('that the counter can be incremented by 1', () => {
        const progress = useProgressStore()
        progress.increment()
        expect(progress.counter).toBe(1)
    })
    test('that the pourcentage is returned', () => {
        const progress = useProgressStore()
        progress.$patch({
            max: 10,
            counter: 5
        })
        expect(progress.pourcentage).toBe(50)
    })
})