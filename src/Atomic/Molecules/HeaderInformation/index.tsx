import React, { useContext } from 'react';
import ViewHeaderInformation from './view';
import { Context } from '../../../Context';
import { PropsHeaderInformation } from './Models'

const HeaderInformation: React.FC<PropsHeaderInformation> = ({
}) => {
    const { pokemon } = useContext(Context);

    return (
        <ViewHeaderInformation
            title={pokemon.name}
            type={pokemon.types[0].type.name}
            power={pokemon.abilities[0].ability.name}
        />
    )
}
export default HeaderInformation;