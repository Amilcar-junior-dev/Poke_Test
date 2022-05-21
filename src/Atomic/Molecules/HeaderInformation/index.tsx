import React,{useContext}from 'react';
import ViewHeaderInformation from './view';
import { Context } from '../../../Context';
import { PropsHeaderInformation } from './Models'

const HeaderInformation: React.FC<PropsHeaderInformation> = ({
children,
color,
}) => {
    const {pokemonValue, pokemon } = useContext(Context);
    console.log(pokemon.name)

    const randomColor = (): string => {
        if (parseInt(color) % 4 == 0) {
            return "#4de0ac"
        }
        if (parseInt(color) % 4 == 1) {
            return "#C64B50"
        }
        if (parseInt(color) % 4 == 2) {
            return "#77A4CE"
        }

        return "#FAE48B"
    }

    return (
        <ViewHeaderInformation
            pokemonValue={pokemonValue}
            name = {pokemon}
            title={pokemon.name}
            type={pokemon.types[0].type.name}
            power={pokemon.abilities[0].ability.name }
            color={randomColor()}
        >
            {children}
        </ViewHeaderInformation>
    )
}
export default HeaderInformation;