import React, { useContext } from 'react';
import ViewDescription from './view'
import { PropsDescription } from './Models'
import { Context } from '../../../Context';

const Description: React.FC<PropsDescription> = ({
    children
}) => {
    const { pokemon } = useContext(Context)
    return (
        <ViewDescription
            title='Descrição'
            description={`Während ein Pokémon mit dieser Fähigkeit im Kampf ist, kann das weather zwar geändert werden, hat aber keinen Effekt.\n\nDiese Fähigkeit ist identisch mit air lock.`}
        >
            {children}
        </ViewDescription>
    )
}
export default Description;