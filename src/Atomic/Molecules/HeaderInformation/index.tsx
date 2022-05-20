import React,{useContext}from 'react';
import ViewHeaderInformation from './view';
import { Context } from '../../../Context';
import { PropsHeaderInformation } from './Models'

const HeaderInformation: React.FC<PropsHeaderInformation> = ({
children
}) => {
    const pokemonValue = useContext(Context);
    
    return (
        <ViewHeaderInformation
            pokemonValue={pokemonValue}
            title='Bulbasaur'
            type='Planta'
            power='Venenoso'
        >
            {children}
        </ViewHeaderInformation>
    )
}
export default HeaderInformation;