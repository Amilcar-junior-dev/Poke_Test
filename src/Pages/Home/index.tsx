import React from 'react';
import View from './view'
import { PropsHome } from './Models';

const Home: React.FC<PropsHome> = () => {
    return (
        <View
            user=' Ash Ketchum'
            message='Bem vindo!'
            title={`Qual pokémon você \n escolheria ?`}
        />
    )
}
export default Home;