import React, { createContext, useEffect, useState } from 'react';
import { PropsContext } from './Models';
import api from '../Utils/axios';

export const Context = createContext({});

const ContextProvider: React.FC<PropsContext> = ({
    children,
    results
}) => {
    const [pokemonValue, setPokemonValue] = useState([]);

    useEffect(() => {

        async function getResponse() {
            try {
                const response = await api.get(`/api/v2/pokemon`)
                setPokemonValue(response.data)

            } catch (error) {
                alert('error from api')
            }
        }
        getResponse();
    }, [])

    const SelectedPokemon = (id: string) => {

        console.log(id)
    }

    return (
        <Context.Provider value={{ pokemonValue, SelectedPokemon }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;
