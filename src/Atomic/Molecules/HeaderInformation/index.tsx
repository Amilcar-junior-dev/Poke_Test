import React, { useContext } from 'react';
import ViewHeaderInformation from './view';
import { Context } from '../../../Context';
import { PropsHeaderInformation } from './Models'

const HeaderInformation: React.FC<PropsHeaderInformation> = ({
    children,
}) => {
    const { pokemonValue, pokemon } = useContext(Context);

    return (
        <ViewHeaderInformation
            pokemonValue={pokemonValue}
            name={pokemon}
            title={pokemon.name}
            type={pokemon.types[0].type.name}
            power={pokemon.abilities[0].ability.name}
        >
            {children}
        </ViewHeaderInformation>
    )
}
export default HeaderInformation;