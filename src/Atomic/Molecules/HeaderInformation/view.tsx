import React,{useContext} from 'react';
import { Box } from '../../Atoms/Box';
import { Text } from '../../Atoms/Text';
import { PropsHeaderInformation } from './Models';
import { Context } from '../../../Context';

import IconLeftArrow from 'react-native-vector-icons/MaterialIcons';
import IconHeart from 'react-native-vector-icons/AntDesign';

const HeaderInformation: React.FC<PropsHeaderInformation> = ({
    type,
    power,
}) => {
    const {pokemon}=useContext(Context)
    return (
        <Box height='296px'>
            <Box
                backgroundColor='#20f5ca'
                height='280px'
                pd={10} >
                <Box
                    justifyContent='space-between'
                    height='30px'
                    flexDirections='row'>
                    <IconLeftArrow name='arrow-back' size={40} color='#ffffff' />
                    <IconHeart name='hearto' size={25} color='#ffffff' />
                </Box>
                <Box
                    height='60px'>
                    <Text
                        fSize={50}
                        color='#fff'>
                        {pokemon.name}
                    </Text>
                </Box>

                <Box
                    height='40px'
                    flexDirections='row'
                    alignItems='center'>
                    <Box
                        height='30px'
                        width='80px'
                        marginRight='10px'
                        alignItems='center'
                        justifyContent='center'
                        borderRadiusTopLeft='20px'
                        borderRadiusTopRight='20px'
                        borderRadiusBottomLeft='20px'
                        borderRadiusBottomRight='20px'
                        backgroundColor='#8dfbe5'>
                        <Text fSize={15} color='#fff' fWeight='bold'>
                            {pokemon.types[0].type.name}
                        </Text>
                    </Box>
                    <Box
                        height='30px'
                        width='80px'
                        alignItems='center'
                        justifyContent='center'
                        borderRadiusTopLeft='20px'
                        borderRadiusTopRight='20px'
                        borderRadiusBottomLeft='20px'
                        borderRadiusBottomRight='20px'
                        backgroundColor='#8dfbe5'>
                        <Text fSize={15} color='#fff' fWeight='bold'>
                            {pokemon.abilities[0].ability.name 
}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default HeaderInformation;