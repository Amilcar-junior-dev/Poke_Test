import React from 'react';
import ViewMeasurements from './view'
import { PropsDescription } from './Models'

const Measurements: React.FC<PropsDescription> = ({
    children
}) => {
    return (
        <ViewMeasurements
            weight='6.9 KG'
            height=' 0.7 m'
            power='Chicote de Vinha'
        >
            {children}
        </ViewMeasurements>
    )
}
export default Measurements;