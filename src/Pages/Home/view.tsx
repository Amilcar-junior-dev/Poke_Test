import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BoxContainer, Box } from '../../Atomic/Atoms/Box'
import { Text } from '../../Atomic/Atoms/Text';
import PokeCard from '../../Atomic/Molecules/Cards/PokeCard'
import Header from '../../Atomic/Molecules/Header';
import Footer from '../../Atomic/Molecules/Footer';
import { PropsHome } from './Models';
import Body from '../../Atomic/Molecules/Body';

const Home: React.FC<PropsHome> = ({
    title,
}) => {

    return (
        <BoxContainer backgroundColor='#ffffff'>
            <Header />
            <Box
                pd={10}
                height='100px'>
                <Text
                    fWeight='bold'
                    fSize={20}>
                    {title}
                </Text>
            </Box>
            <Box
                pd={10}
                height='330px'>
                <PokeCard />

            </Box>

            <Body />
            <Footer />
        </BoxContainer>
    )
}
export default Home;


