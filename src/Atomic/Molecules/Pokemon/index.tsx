import React, { useContext} from 'react';
import ViewPokemon from './view';
import { Context } from '../../../Context';
import { PropsPokemon } from './Models';

const Pokemon:React.FC<PropsPokemon> = ({
children
}) => {
    const pokemonValue = useContext(Context);
    return (
        <ViewPokemon
        pokemonValue={pokemonValue}>
            {children}
        </ViewPokemon>
    )
}
export default Pokemon;