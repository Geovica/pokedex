import { shallowMount } from '@vue/test-utils'
import Pokemon from '@/components/Pokemon.vue'


describe('Pokemon.vue', () => {
  test('should fetch pokeapi data', () => {
    const data = [
      {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
      },
      {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/"
      },
      {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/"
      },
      {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/"
      },
      {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/"
      },
      {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/"
      },
      {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/"
      },
      {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/"
      },
      {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/"
      },
      {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/"
      },
      {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/"
      }
      ];
   
    expect(data).toEqual([
      {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
      },
      {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/"
      },
      {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/"
      },
      {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/"
      },
      {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/"
      },
      {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/"
      },
      {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/"
      },
      {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/"
      },
      {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/"
      },
      {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/"
      },
      {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/"
      }
      ]);
  });


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

describe('Testing classes and style Pokemon.vue', () => {
  const wrapper = shallowMount(Pokemon);
  it('should have the class container', () => {
      expect(wrapper.classes()).toContain('container');
  })
})