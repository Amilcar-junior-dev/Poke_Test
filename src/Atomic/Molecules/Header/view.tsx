import React from 'react';
import { BoxHeader, Box } from '../../Atoms/Box'
import { Text } from '../../Atoms/Text';
import { Image } from '../../Atoms/Image'

import { PropsHeader } from './Models';

const Header: React.FC<PropsHeader> = ({
    user,
    message,
}) => {
    return (

        <BoxHeader
            heigth='155px'
            marginBottom='50px'
            borderRadiusBottomLeft='25px'
            borderRadiusBottomRight='25px'
            alignItems='center'
            justifyContent='center'
            backgroundColor='#4e4e4e'>
            <Box
                height='100%'
                flexDirections='row'
                justifyContent='space-between'>
                <Box
                    pd={10}
                    height='100%'
                    width='50%'
                    justifyContent='center'>
                    <Box
                        marginTop='8px'
                        alignItems='center'
                        height='30px'
                        flexDirections='row'>
                        <Text
                            color='#fff'
                            fSize={20}>
                            Olá, {user}
                        </Text>
                        <Text
                            color='#fff'
                            fSize={20}
                            fWeight='bold'>
                        </Text>
                    </Box>
                    <Text
                        color='#fff'
                        fSize={15}>
                        {message}
                    </Text>
                </Box>
                <Box
                    height='100%'
                    width='180px'>
                    <Box
                        marginLeft='20px'
                        marginTop='0px'
                        position='relative'
                        justifyContent='center'
                        height='100%'>
                        <Image source={require('../../../Assets/pokebola.png')}
                            style={{
                                marginLeft: 10,
                                width: 209,
                                height: 200,
                                tintColor: '#f8f8f831'
                            }}
                            resizeMode='contain' />
                        <Box height='65px'

                            position='absolute'>
                            <Box
                                marginLeft='84px'
                                height='61px'
                                alignItems='center'
                                justifyContent='center'
                                width='60px'
                                marginRight='10px'
                                borderRadiusTopLeft='10px'
                                borderRadiusTopRight='10px'
                                borderRadiusBottomLeft='10px'
                                borderRadiusBottomRight='10px'
                                backgroundColor='#bdbdbd'>
                                <Image source={require('../../../Assets/ash.webp')}
                                    style={{
                                        width: 65,
                                        height: 65
                                    }}
                                    resizeMode='contain' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BoxHeader>
    )
}

export default Header;

