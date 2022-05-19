import React from 'react';
import { Box } from '../../Atoms/Box';
import { Text } from '../../Atoms/Text';
import { PropsCaracteristics } from './Models';

import IcoGenderX from 'react-native-vector-icons/MaterialCommunityIcons';
import IcoGenderY from 'react-native-vector-icons/MaterialCommunityIcons';

const Caracteristics: React.FC<PropsCaracteristics> = ({
    title,
    gender,
    itemGenderX,
    itemGenderY

}) => {
    return (
        <Box 
            height='100%'
            marginTop='15px'
            pd={10}>
            <Text fSize={17}>
                {title}
            </Text>
            <Box 
                flexDirections='row'
                height='30px'>
                <Box 
                    width='35%'
                    height='100%'
                    justifyContent='center'>
                    <Text fSize={12}>
                        {gender}
                    </Text>
                </Box>
                <Box width='20%'
                    height='100%'
                    justifyContent='center'
                    alignItems='center'
                    flexDirections='row'>
                        <IcoGenderX name='gender-male' size={15} color='#c06bed' />
                        <Text fWeight='bold'>
                           {itemGenderX}
                        </Text>

                </Box>

                <Box width='20%'
                    height='100%'
                    justifyContent='center'
                    alignItems='center'
                    flexDirections='row'>
                          <IcoGenderY name='gender-male-female-variant' size={15} color='#ff00f2' />
                        <Text fWeight='bold'>
                            {itemGenderY}
                        </Text>

                </Box>

            </Box>

        </Box>
    )
}
export default Caracteristics;