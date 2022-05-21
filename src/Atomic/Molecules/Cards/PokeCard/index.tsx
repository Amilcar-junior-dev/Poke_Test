import React from 'react';
import ViewPokeCard from './view'
import { PropsPokeCard } from './Models'

const PokeCard: React.FC<PropsPokeCard> = ({
    name,
    power,
    type,
    color,
    image,
    onPress,
}) => {

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
        <ViewPokeCard
            name={name}
            power={power}
            type={type}
            image={image}
            color={randomColor()}
            onPress={onPress}
        />
    )
}
export default PokeCard;