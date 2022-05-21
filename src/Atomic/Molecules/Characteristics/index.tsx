import React, { useContext } from 'react';
import ViewCaracteristics from './view'
import { PropsCaracteristics } from './Models'
import { Context } from '../../../Context';

const Caracteristics: React.FC<PropsCaracteristics> = ({
    children
}) => {
    const { pokemon } = useContext(Context)

    return (
        <ViewCaracteristics
            title='Suas caracteristicas'
            gender='Gênero'
            itemGenderX='87.5%'
            itemGenderY='12.5%'
            attack={pokemon.stats[1].stat.name}
            valueAttack={pokemon.stats[1].base_stat}
            defense={pokemon.stats[2].stat.name}
            valueDefense={pokemon.stats[2].base_stat}
            VIattack={pokemon.stats[3].stat.name}
            valueVIattack={pokemon.stats[3].base_stat}
            VIdefense={pokemon.stats[4].stat.name}
            valueVIdefense={pokemon.stats[4].base_stat}
            velocity={pokemon.stats[5].stat.name}
            valueVelocity={pokemon.stats[5].base_stat}
            strengthsAndWeaknesses='Forças e fraquezas'
            caracteristicsStrengthsAndWeaknesses='Attacken die Schaden verursachen haben mit jedem Treffer eine 10% Chance das Ziel zurückschrecken zu lassen, wenn die Attacke dies nicht bereits als Nebeneffekt hat.\n\nDer Effekt stapelt nicht mit dem von getragenen Items.\n\nAußerhalb vom Kampf: Wenn ein Pokémon mit dieser Fähigkeit an erster Stelle im Team steht, tauchen wilde Pokémon nur halb so oft auf'
        >
            {children}
        </ViewCaracteristics>
    )
}
export default Caracteristics;