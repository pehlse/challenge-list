import { shallowMount } from '@vue/test-utils'
import { expect, test, it, describe } from 'vitest'

import Avatar from '../Avatar.vue'

const DATA_TESTID_NO_PHOTO = '[data-testid="avatar__no-photo"]'

describe('Avatar component', () => {
  test('Should render component', () => {
    const wrapper = shallowMount(Avatar)

    expect(wrapper.exists()).toBe(true)
  })

  test('Should render message: Sem foto when not pass prop img', () => {
    const wrapper = shallowMount(Avatar)
    expect(wrapper.find(DATA_TESTID_NO_PHOTO).exists()).toBe(true)
  })
})