import React from 'react';
import ViewCaracteristics from './view'
import { PropsCaracteristics } from './Models'

const Caracteristics: React.FC<PropsCaracteristics> = ({
    children
}) => {
    const itemCaracteristics = [
        {
            id: 0,
            name: 'Saúde',
            value: 46,
            color: '#f35252'
        },
        {
            id: 1,
            name: 'Ataque',
            value: 68,
            color: '#f3f352'
        },
        {
            id: 2,
            name: 'Defesa',
            value: 52,
            color: '#52f3f3'
        },
        {
            id: 2,
            name: 'VI.Ataque',
            value: 34,
            color: '#65f352'
        },
        {
            id: 2,
            name: 'VI.Defesa',
            value: 22,
            color: '#e052f3'
        },
        {
            id: 2,
            name: 'Velocidade',
            value: 82,
            color: '#f35252'
        },
        {
            id: 2,
            name: 'Total',
            value: 52,
            color: '#09ff00'
        },
    ]
    return (
        <ViewCaracteristics
            title='Suas caracteristicas'
            gender='Gênero'
            itemGenderX='87.5%'
            itemGenderY='12.5%'
            strengthsAndWeaknesses='Forças e fraquezas'
            caracteristicsStrengthsAndWeaknesses='Attacken die Schaden verursachen haben mit jedem Treffer eine 10% Chance das Ziel zurückschrecken zu lassen, wenn die Attacke dies nicht bereits als Nebeneffekt hat.\n\nDer Effekt stapelt nicht mit dem von getragenen Items.\n\nAußerhalb vom Kampf: Wenn ein Pokémon mit dieser Fähigkeit an erster Stelle im Team steht, tauchen wilde Pokémon nur halb so oft auf'
            itemCaracteristics={itemCaracteristics}
        >
            {children}
        </ViewCaracteristics>
    )
}
export default Caracteristics;