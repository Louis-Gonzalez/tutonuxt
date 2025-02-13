import { beforeEach, describe, expect, vitest, test } from 'vitest'
import Progress from '../../components/Progress.vue'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useProgressStore } from '../../stores/progress'

describe('Progress.vue', () => {
    let wrapper = null
    beforeEach(() => {
        wrapper = mount(Progress, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vitest.fn
                })]
            }
        })
    })
    test('that it displays the pourcentage', () => {
        expect(wrapper.find('#pourcentage').text()).toContain('0 %')
    })
    test('that it increment the progress', () => {
        const progress = useProgressStore()

        wrapper.find('#increment-btn').trigger('click')
        expect(progress.increment).toHaveBeenCalledOnce()

    })
})