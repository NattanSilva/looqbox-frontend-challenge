import { Button, Card } from 'antd'
import { useEffect, useState, type ComponentProps } from 'react'
import { useNavigate } from 'react-router'
import FallbackImage from '../../assets/fallback.png'

import { api } from '../../services/api'

export interface Sprites {
  front_default: string
}

export interface Form {
  name: string
  url: string
}

export interface PokemonData {
  name: string
  order: number
  id: number
  sprites: Sprites
  forms: Form[]
}

interface PokemonCardProps extends ComponentProps<'li'> {
  name: string
  url: string
}

export function PokemonCard({ name, url, ...rest }: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState<PokemonData>()
  const navigate = useNavigate()

  const getPokemon = async (url: string) => {
    const response = await api.get<PokemonData>(url)
    setPokemonData(response.data)
  }

  useEffect(() => {
    getPokemon(url)
  }, [])

  return (
    <li className='w-full md:w-[49.5%] lg:w-[23.5%]' key={name} {...rest}>
      <Card className='w-full! border-4! border-neutral-800! mb-4! rounded-tr-none! rounded-bl-none! rounded-2xl!'>
        <div className='w-full h-fit flex flex-col mb-8!'>
          <h3 className='w-full h-12 font-cursive text-2xl truncate'>
            {pokemonData?.name}
          </h3>
          <p className='font-medium text-base text-neutral-400 italic'>
            #{pokemonData?.id}
          </p>
        </div>
        <img
          src={pokemonData?.sprites.front_default ?? FallbackImage}
          alt={name}
          className='w-full h-48'
        />
        <Button
          type='primary'
          onClick={(e) => navigate(`/pokemons/${pokemonData?.id}/details`)}
          className='w-full mt-4 rounded-tr-none! rounded-bl-none!'
        >
          Details
        </Button>
      </Card>
    </li>
  )
}
