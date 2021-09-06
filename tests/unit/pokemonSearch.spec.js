import { shallowMount } from '@vue/test-utils'
import PokemonSearch from '@/components/PokemonSearch.vue'

describe('Testing classes and style Pokemon.vue', () => {
  const wrapper = shallowMount(PokemonSearch);
  it('should have the class searchbar', () => {
      expect(wrapper.classes()).toContain('searchbar');
  })
})