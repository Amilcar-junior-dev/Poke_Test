import React from 'react';
import { Box } from '../../Atoms/Box';
import { Text } from '../../Atoms/Text';
import { PropsDescription } from './Models';

import IcoWeight from 'react-native-vector-icons/FontAwesome5';
import IcoHeight from 'react-native-vector-icons/MaterialIcons';

const Measurements: React.FC<PropsDescription> = ({
    weight,
    height,
    power,
}) => {
    return (
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
                <Text color='#b0b0b0'>
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
                    <IcoHeight name='height' size={20} />
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
                <Text color='#b0b0b0'>
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
                <Text color='#b0b0b0'>
                    Poder Principal
                </Text>
            </Box>
        </Box>
    )
}
export default Measurements;