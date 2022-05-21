import React from 'react';
import { Box } from '../../../Atoms/Box';
import { Text } from '../../../Atoms/Text'
import { Image } from '../../../Atoms/Image';
import { PropsPokeCard } from './Models';
import { BoxTouch } from '../../../Atoms/Box';

const PokeCard: React.FC<PropsPokeCard> = ({
    name,
    power,
    type,
    color,
    image,
    onPress,
}) => {
   
    return (
        <BoxTouch onPress={ onPress }
        width='40%'
        height='120px'
        marginBottom='10px'
        marginRight='10px'
        borderRadiusTopLeft='10px'
        borderRadiusTopRight='10px'
        borderRadiusBottomLeft='10px'
        borderRadiusBottomRight='10px'>
            <Box 
                backgroundColor={color}
                pd={10}
                width='100%'
                height='120px'
                marginBottom='10px'
                marginRight='10px'
                borderRadiusTopLeft='10px'
                borderRadiusTopRight='10px'
                borderRadiusBottomLeft='10px'
                borderRadiusBottomRight='10px'>
                <Box
                    justifyContent='center'>
                    <Text
                        color='#fff'
                        fSize={20}>
                        {name}
                    </Text>
                </Box>
                <Box
                    flexDirections='row'
                    height='50px'>
                    <Box
                        width='50%'
                        height='75px'>
                        <Box
                            backgroundColor='#FFFFFF30'
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
                                {type}
                            </Text>
                        </Box>
                        <Box
                            backgroundColor='#FFFFFF30'
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
                                {power}
                            </Text>
                        </Box>

                    </Box>
                    <Box
                        width='50%'
                        height='75px'

                        alignItems='center'
                        justifyContent='flex-end'>
                        <Image source={{uri: image}}
                            style={{
                                width: 70,
                                height: 80,
                                marginBottom: 4
                            }} />
                    </Box>
                </Box>
            </Box>
        </BoxTouch>
    )
}
export default PokeCard;