import React from 'react';
import ViewPokeCard from './view'
import { PropsPokeCard } from './Models'

const PokeCard: React.FC<PropsPokeCard> = ({
    name,
    onPress
}) => {
    return (
        <ViewPokeCard
            name={name}
            onPress={onPress}
        />
    )
}
export default PokeCard;