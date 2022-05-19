import React from 'react';
import ViewCaracteristics from './view'
import { PropsCaracteristics } from './Models'

const Caracteristics: React.FC<PropsCaracteristics> = ({
    children
}) => {
    return (
        <ViewCaracteristics
            title='Suas caracteristicas'
            gender='Gênero'
            itemGenderX='87.5%'
            itemGenderY='12.5%'
        >
            {children}
        </ViewCaracteristics>
    )
}
export default Caracteristics;