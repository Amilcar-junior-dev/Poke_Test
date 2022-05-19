import React from 'react';
import ViewDescription from './view'
import { PropsDescription } from './Models'

const Description: React.FC<PropsDescription> = ({
children
}) => {
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