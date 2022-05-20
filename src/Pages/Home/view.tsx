import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { BoxContainer, Box } from '../../Atomic/Atoms/Box'
import { Text } from '../../Atomic/Atoms/Text';
import PokeCard from '../../Atomic/Molecules/Cards/PokeCard'
import Header from '../../Atomic/Molecules/Header';
import Footer from '../../Atomic/Molecules/Footer';
import { PropsHome } from './Models';
import { Context } from '../../Context';

const Home: React.FC<PropsHome> = ({
    title,

}) => {
    const { pokemonValue, SelectedPokemon } = useContext(Context);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                    justifyContent='center'
                    wrap='wrap'
                    flexDirections='row'>
                    {pokemonValue.results?.map((item, index) => (
                        <PokeCard key={index} name={item.name} onPress={() => SelectedPokemon(index + 1)} />
                    ))}
                </Box>
                <Footer />
            </BoxContainer>
        </ScrollView>
    )
}
export default Home;