import React from 'react';
import { BoxContainer, Box } from '../../Atomic/Atoms/Box';
import { Text } from '../../Atomic/Atoms/Text';
import { PropsDetails } from './Models';

import IcoWeight from 'react-native-vector-icons/FontAwesome5';
import IcoHeight from 'react-native-vector-icons/MaterialIcons';

const Details: React.FC<PropsDetails> = ({
    description,
}) => {
    return (
        <BoxContainer
            backgroundColor='#20f5ca'>
            <Box
                justifyContent='flex-end'
                height='100%'>
                <Box
                    height='450px'
                    backgroundColor='#fff'
                    borderRadiusTopLeft='25px'
                    borderRadiusTopRight='25px'>
                    <Box
                        pd={10}
                        borderRadiusTopLeft='25px'
                        borderRadiusTopRight='25px'
                        height='80px'
                        justifyContent='center'>
                        <Text
                            color='#1ddcb6'
                            fSize={20}
                            fWeight='bold'>
                            Descrição
                        </Text>
                    </Box>
                    <Box
                        pd={10}
                        height='80px'>
                        <Text>
                            {description}
                        </Text>

                    </Box>
                    <Box
                        height='60px'
                        flexDirections='row'
                        justifyContent='space-between'>
                        <Box
                            borderColor='#ababab'
                            borderRightWidth='1px'
                            alignItems='center'
                            width='33%'
                            height='100%'>
                            <Box
                                flexDirections='row'
                                height='70%'
                                alignItems='center'
                                justifyContent='center'>
                                <IcoWeight name='weight' size={20} />
                                <Box
                                    height='100%'
                                    width='50%'
                                    alignItems='center'
                                    justifyContent='center'>
                                    <Text fSize={15}
                                        fWeight='bold'>
                                        6.9 kg
                                    </Text>
                                </Box>
                            </Box>
                            <Text  color='#b0b0b0'>
                                Peso
                            </Text>
                        </Box>

                        <Box
                            borderColor='#ababab'
                            borderRightWidth='1px'
                            alignItems='center'
                            width='33%'
                            height='100%'>
                                  <Box
                                flexDirections='row'
                                height='70%'
                                alignItems='center'
                                justifyContent='center'>
                                     <IcoHeight name='height' size={20}/>
                                <Box
                                    height='100%'
                                    width='50%'
                                    alignItems='center'
                                    justifyContent='center'>
                                       
                                    <Text fSize={15}
                                        fWeight='bold'>
                                        0.7 m
                                    </Text>
                                </Box>
                            </Box>
                            <Text  color='#b0b0b0'>
                                Altura
                            </Text>
                        </Box>

                        <Box
                            borderColor='#ababab'
                            borderRightWidth='1px'
                            alignItems='center'
                            width='33%'
                            height='100%'>
                                  <Box
                                flexDirections='row'
                                height='70%'
                                alignItems='center'
                                justifyContent='center'>
                                <Box
                                    height='100%'
                                    width='50%'
                                    alignItems='center'
                                    justifyContent='center'>
                                    <Text 
                                       
                                        fSize={15}
                                        fWeight='bold'>
                                        Chicote de vinha
                                    </Text>
                                </Box>
                            </Box>
                            <Text  color='#b0b0b0'>
                                Poder Principal
                            </Text>


                        </Box>

                    </Box>

                </Box>
            </Box>
        </BoxContainer>
    )
}
export default Details;