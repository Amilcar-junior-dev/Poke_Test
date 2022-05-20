import React, { useContext } from 'react';
import ViewPokeCard from './view'
import { PropsPokeCard } from './Models'
import { Context } from '../../../../Context';

const PokeCard: React.FC<PropsPokeCard> = ({

}) => {
    const pokemonValue = useContext(Context);
    return (
        <ViewPokeCard
            pokemonValue={pokemonValue}
        />
    )
}
export default PokeCard;