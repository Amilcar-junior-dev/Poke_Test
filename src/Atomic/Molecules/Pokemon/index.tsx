import React from 'react';
import ViewPokemon from './view';
import { PropsPokemon } from './Models';

const Pokemon: React.FC<PropsPokemon> = ({
    children
}) => {
    return (
        <ViewPokemon>
            {children}
        </ViewPokemon>
    )
}
export default Pokemon;