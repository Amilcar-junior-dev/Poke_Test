import React from 'react';
import { BoxContainer, Box } from '../../../Atomic/Atoms/Box';
import { Image } from '../../../Atomic/Atoms/Image';
import { Text } from '../../../Atomic/Atoms/Text';
import { PropsApresentation } from './Models';

const Apresentation: React.FC<PropsApresentation> = ({
    load
}) => {
    return (
        <BoxContainer
            backgroundColor='#ffffff'>
            <Box
                height='200px'
                alignItems='center'
                justifyContent='flex-end'>
                <Image source={require('../../../Assets/logo.png')}
                    style={{
                        width: 250,
                        height: 80
                    }} />
            </Box>
            <BoxContainer
                alignItems='center'
                justifyContent='flex-end'>
                <Image source={require('../../../Assets/poke.webp')}
                    style={{
                        width: 105,
                        height: 133
                    }}
                    resizeMode='contain' />
                <Box backgroundColor='#fff' height='100px'
                    alignItems='center'>
                    <Box height='30px' alignItems='center'marginTop='30px'>
                        <Text fSize={20} fWeight='bold'>
                           {load}
                        </Text>
                    </Box>
                </Box>
            </BoxContainer>
        </BoxContainer>
    )
}
export default Apresentation;

