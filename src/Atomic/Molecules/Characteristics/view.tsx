import React from 'react';
import { Box } from '../../Atoms/Box';
import { Text } from '../../Atoms/Text';
import { PropsCaracteristics } from './Models';

import * as Progress from 'react-native-progress';


import IcoGenderX from 'react-native-vector-icons/MaterialCommunityIcons';
import IcoGenderY from 'react-native-vector-icons/MaterialCommunityIcons';


const Caracteristics: React.FC<PropsCaracteristics> = ({
    title,
    gender,
    itemGenderX,
    itemGenderY,
    itemCaracteristics,
    strengthsAndWeaknesses,
    caracteristicsStrengthsAndWeaknesses,

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
                    width='30%'
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

            {itemCaracteristics.map((item, index) => (
                <Box key={index}
                    height='30px'
                    alignItems='center'
                    flexDirections='row'
                    marginTop='1px'>
                    <Box
                        justifyContent='center'
                        width='60px'
                        height='100%'>
                        <Text fSize={12}>
                            {item.name}
                        </Text>
                    </Box>

                    <Box
                        height='100%'
                        width='100px'
                        alignItems='center'
                        justifyContent='center'>
                        <Text>
                            {item.value}
                        </Text>
                    </Box>
                    <Progress.Bar progress={item.value / 100} width={200} color={item.color} />
                </Box>
            ))}
            <Box
                marginTop='10px'
                height='150px'>

                <Text fSize={17}>
                    {strengthsAndWeaknesses}
                </Text>
                <Text fSize={12}>
                    {caracteristicsStrengthsAndWeaknesses}
                </Text>
            </Box>

          
        </Box>
    )
}
export default Caracteristics;