import React, { createContext, useEffect, useState } from 'react';
import { PropsContext } from './Models';
import api from '../Utils/axios';

export const Context = createContext<PropsContext>({});

const ContextProvider = ({
    children,
}) => {
    const [pokemonValue, setPokemonValue] = useState([]);
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        (async function () {
            getPokemon();
        })()
    }, [])

    const getPokemon = async () => {
        setLoading(true)
        try {
            const response = await api.get(`/api/v2/pokemon?limit=8&offset=${offset}`)
            await reorderArray(response.data.results)
            setOffset(offset + 8)

        } catch (error) {
            alert('Falha ao buscar dados.')
        }

        setLoading(false)
    }

    const reorderArray = async (response) => {
        if (pokemonValue.length > 0) {
            const array = [...pokemonValue]
            await response.map(async (item, index) => {
                const { data } = await api.get(`/api/v2/pokemon/${offset + index + 1}`);
                array.push({
                    ...item,
                    ...data
                })
            })

            setPokemonValue(array)
        } else {
            const array = []
            await response.map(async (item, index) => {
                const { data } = await api.get(`/api/v2/pokemon/${index + 1}`);
                array.push({
                    ...item,
                    ...data
                })
            })
            setPokemonValue(array)
        }
    }

    const SelectedPokemon = (id?: string) => {
        setPokemon(pokemonValue[id])
    }


    const value: PropsContext = {
        pokemonValue,
        loading,
        pokemon,
        SelectedPokemon,
        getPokemon,

    }



    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;