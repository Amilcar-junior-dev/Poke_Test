import React from 'react';
import ViewDetails from './view'
import { PropsDetails } from './Models';

const Details: React.FC<PropsDetails> = ({
    name,
    type,
    power,
    title,
    description,
    Weight,
    heigth,
    powerMain,
    Characteristics,
    gender,
    Cheers,
    attack,
    defense,
    VIattack,
    VIdefense,
    velocity,
    sum,
    strengthsAndWeaknesses,
}) => {
    return (
        <ViewDetails
            name=''
            type=''
            power=''
            title=''
            description={`Während ein Pokémon mit dieser Fähigkeit im Kampf ist, kann das weather zwar geändert werden, hat aber keinen Effekt.\n\nDiese Fähigkeit ist identisch mit air lock.`}
            Weight=''
            heigth=''
            powerMain=''
            Characteristics=''
            gender=''
            Cheers=''
            attack=''
            defense=''
            VIattack=''
            VIdefense=''
            velocity=''
            sum=''
            strengthsAndWeaknesses=''
        />
    )
}
export default Details;