import React from 'react';
import ViewHeaderInformation from './view'
import { PropsHeaderInformation } from './Models'

const HeaderInformation: React.FC<PropsHeaderInformation> = ({
children
}) => {
    return (
        <ViewHeaderInformation
            title='Bulbasaur'
            type='Planta'
            power='Venenoso'
        >
            {children}
        </ViewHeaderInformation>
    )
}
export default HeaderInformation;