import React, { useContext, useState } from 'react';
import ViewPokeCard from './view'
import { PropsPokeCard } from './Models'
import { Context } from '../../../../Context';

const PokeCard: React.FC<PropsPokeCard> = ({
    name
}) => {
    const pokemonValue = useContext(Context);

    return (
        <ViewPokeCard
            pokemonValue={pokemonValue}
            name={name}
        />
    )
}
export default PokeCard;