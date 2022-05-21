import React, { useContext } from 'react';
import ViewMeasurements from './view'
import { PropsDescription } from './Models'
import { Context } from '../../../Context';

const Measurements: React.FC<PropsDescription> = ({
    children
}) => {
    const {pokemon}=useContext(Context);
    return (
        <ViewMeasurements
            weight={ pokemon.weight}
            height={pokemon.height}
            power={pokemon.moves[0].move.name}
        >
            {children}
        </ViewMeasurements>
    )
}
export default Measurements;