import { shallowMount } from '@vue/test-utils'
import Pokemon from '@/components/Pokemon.vue'


describe('Pokemon.vue', () => {
  it('renders apiUrl when passed', () => {
    const apiUrl = ''
    const wrapper = shallowMount(Pokemon, {
      propsData: { apiUrl }
    })
    expect(wrapper.text()).toMatch(apiUrl)
  })

  it('renders imageUrl when passed', () => {
    const imageUrl = ''
    const wrapper = shallowMount(Pokemon, {
      propsData: { imageUrl }
    })
    expect(wrapper.text()).toMatch(imageUrl)
  })

  it('renders pokemonUrl when passed', () => {
    const pokemonUrl = ''
    const wrapper = shallowMount(Pokemon, {
      propsData: { pokemonUrl }
    })
    expect(wrapper.text()).toMatch(pokemonUrl)
  })
})
