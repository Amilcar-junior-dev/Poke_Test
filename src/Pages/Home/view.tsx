import React, { useContext } from 'react';
import { FlatList, Dimensions, ActivityIndicator, Platform } from 'react-native';
import normalize from "react-native-normalize"

import { Box } from '../../Atomic/Atoms/Box'
import { Text } from '../../Atomic/Atoms/Text';
import PokeCard from '../../Atomic/Molecules/Cards/PokeCard'
import Header from '../../Atomic/Molecules/Header';
import Footer from '../../Atomic/Molecules/Footer';
import { PropsHome } from './Models';
import { Context } from '../../Context';
import { useNavigation } from '@react-navigation/native';


const Home: React.FC<PropsHome> = ({
    title,
    navega
}) => {
    const {
        pokemonValue,
        SelectedPokemon,
        getPokemon,
        pokemon,
        loading,
    } = useContext(Context);
    const { height } = Dimensions.get("window")
    console.log(pokemon)
     //  console.log(pokemon.stats[5].base_stat)

    /*CARACERÍSTICAS
        ATAQUE ->   pokemon.stats[1].stat.name
        NUMERO ATAQUE -> pokemon.stats[1].base_stat

        DEFESA -> pokemon.stats[2].stat.name
        NUMERO DEFESA -> pokemon.stats[2].base_stat

        ATAQUE ESPECIAL -> pokemon.stats[3].stat.name
        NUMERO ATAQUE ESPECIAL -> pokemon.stats[3].base_stat


        DEFESA ESPECIAL -> pokemon.stats[4].stat.name
        NUMERO DEFESA ESPECIAL  -> pokemon.stats[4].base_stat

        VELOCIDADE -> pokemon.stats[5].stat.name
        NUMERO VELOCIDADE -> pokemon.stats[5].base_stat


    */

    // DESCRIÇÃO POKEMON => pokemon.species => URL => flavor_text_entries[6].flavor_text

    // PODER PRINCIPAL => pokemon.moves[0].move.name

    //PESO POKEMON => pokemon.weight

    // ALTURA POKEMON => pokemon.height

    // IMAGEM POKEMON => pokemon.sprites.other.home.front_default

    // NOME POKEMON => pokemon.name

    // PODER POKEMON => pokemon.abilities[0].ability.name 

    //TIPO POKEMON => pokemon.types[0].type.name
    const navigation = useNavigation();
   

    return (
        <FlatList
            data={pokemonValue}
            ListHeaderComponent={
                <>
                    <Header />
                    <Box
                        pd={10}
                        marginTop="10px"
                        height='100px'>
                        <Text
                            fWeight='bold'
                            fSize={20}>
                            {title}
                        </Text>
                    </Box>
                </>
            }
            ListFooterComponent={
                <>
                    <Footer />
                    <ActivityIndicator animating={loading} />
                </>
            }
            showsVerticalScrollIndicator={false}
            onEndReached={getPokemon}
            onEndReachedThreshold={0.03}
            numColumns={2}
            style={{
                marginBottom: normalize(20)
            }}
            columnWrapperStyle={{
                width: '100%',
                height: normalize(height / 7),
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS === 'ios' ? 16 : 30
            }}
            renderItem={({ item, index }) => (
                <PokeCard
                    key={index}
                    name={item.name}
                    type={item.types[0].type.name}
                    power={item.abilities[0].ability.name}
                    color={index.toString()}
                    image={item.sprites.other.home.front_default}
                    onPress={() => {
                        SelectedPokemon(index)
                        navigation.navigate('Details')
                    }} />
            )}>
        </FlatList >
    )
}

export default Home;