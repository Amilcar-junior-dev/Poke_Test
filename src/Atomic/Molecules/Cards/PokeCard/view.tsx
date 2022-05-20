import React, { useContext } from 'react';
import { Box } from '../../../Atoms/Box';
import { Text } from '../../../Atoms/Text'
import { Image } from '../../../Atoms/Image';
import { Context } from '../../../../Context'

import { PropsPokeCard } from './Models';

const PokeCard: React.FC<PropsPokeCard> = ({

}) => {

    return (
        <Box backgroundColor='#4de0ac'
            pd={10}
            width='48%'
            height='120px'
            borderRadiusTopLeft='10px'
            borderRadiusTopRight='10px'
            borderRadiusBottomLeft='10px'
            borderRadiusBottomRight='10px'>
            <Box
                height='25px'
                marginTop='5px'
                justifyContent='center'>
                <Text
                    color='#fff'
                    fSize={20}>
                    Bulbasaur
                </Text>
            </Box>
            <Box
                flexDirections='row'
                height='50px'>
                <Box
                    width='50%'
                    height='75px'>
                    <Box
                        backgroundColor='#97eacd'
                        width='50px'
                        alignItems='center'
                        justifyContent='center'
                        marginTop='12px'
                        height='20px'
                        borderRadiusTopLeft='10px'
                        borderRadiusTopRight='10px'
                        borderRadiusBottomLeft='10px'
                        borderRadiusBottomRight='10px' >
                        <Text color='#fff'>
                            Planta
                        </Text>
                    </Box>
                    <Box
                        backgroundColor='#97eacd'
                        width='60px'
                        alignItems='center'
                        justifyContent='center'
                        marginTop='5px'
                        height='20px'
                        borderRadiusTopLeft='10px'
                        borderRadiusTopRight='10px'
                        borderRadiusBottomLeft='10px'
                        borderRadiusBottomRight='10px' >
                        <Text color='#fff'>
                            Venenoso
                        </Text>
                    </Box>

                </Box>
                <Box
                    width='50%'
                    height='75px'

                    alignItems='center'
                    justifyContent='flex-end'>
                    <Image source={require('../../../../Assets/buba.png')}
                        style={{
                            width: 70,
                            height: 60
                        }} />
                </Box>
            </Box>
        </Box>
    )
}
export default PokeCard;