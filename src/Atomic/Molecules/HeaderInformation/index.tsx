import React,{useContext}from 'react';
import ViewHeaderInformation from './view';
import { Context } from '../../../Context';
import { PropsHeaderInformation } from './Models'

const HeaderInformation: React.FC<PropsHeaderInformation> = ({
children,
}) => {
    const {pokemonValue, pokemon } = useContext(Context);
    console.log(pokemon.name)

    return (
        <ViewHeaderInformation
            pokemonValue={pokemonValue}
            name = {pokemon}
            title='Bulbasaur'
            type='Planta'
            power='Venenoso'
        >
            {children}
        </ViewHeaderInformation>
    )
}
export default HeaderInformation;