import React from 'react';
import View from './view'
import { useNavigation } from '@react-navigation/native';
import { PropsHome } from './Models';

const Home: React.FC<PropsHome> = ({
}) => {
    const navigation=useNavigation()

    function navega(){

        navigation.navigate('Details')
    }
    return (
        <View
            user=' Ash Ketchum'
            message='Bem vindo!'
            title={`Qual pokémon você \n escolheria ?`}
            navega={navega}
        />
    )
}
export default Home;