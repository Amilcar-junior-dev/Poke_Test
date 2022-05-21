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
    attack,
    valueAttack,
    defense,
    valueDefense,
    VIattack,
    valueVIattack,
    VIdefense,
    valueVIdefense,
    velocity,
    valueVelocity,
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

            <Box
                height='30px'
                alignItems='center'
                flexDirections='row'
                marginTop='1px'>
                <Box
                    justifyContent='center'
                    width='60px'
                    height='100%'>
                    <Text fSize={12}>
                        {attack}
                    </Text>
                </Box>
                <Box
                    height='100%'
                    width='100px'
                    alignItems='center'
                    justifyContent='center'>
                    <Text>
                        {valueAttack}
                    </Text>
                </Box>
                <Progress.Bar progress={valueAttack / 100} width={200} color={'#ef4545'} />
            </Box>
            <Box
                height='30px'
                alignItems='center'
                flexDirections='row'
                marginTop='1px'>
                <Box
                    justifyContent='center'
                    width='60px'
                    height='100%'>
                    <Text fSize={12}>
                        {defense}
                    </Text>
                </Box>
                <Box
                    height='100%'
                    width='100px'
                    alignItems='center'
                    justifyContent='center'>
                    <Text>
                        {valueDefense}
                    </Text>
                </Box>
                <Progress.Bar progress={valueDefense / 100} width={200} color={'#45efb1'} />
            </Box>
            <Box
                height='30px'
                alignItems='center'
                flexDirections='row'
                marginTop='1px'>
                <Box
                    justifyContent='center'
                    width='60px'
                    height='100%'>
                    <Text fSize={12}>
                        {VIattack}
                    </Text>
                </Box>
                <Box
                    height='100%'
                    width='100px'
                    alignItems='center'
                    justifyContent='center'>
                    <Text>
                        {valueVIattack}
                    </Text>
                </Box>
                <Progress.Bar progress={valueVIattack / 100} width={200} color={'#fed91e'} />
            </Box>
            <Box
                height='30px'
                alignItems='center'
                flexDirections='row'
                marginTop='1px'>
                <Box
                    justifyContent='center'
                    width='60px'
                    height='100%'>
                    <Text fSize={12}>
                        {VIdefense}
                    </Text>
                </Box>
                <Box
                    height='100%'
                    width='100px'
                    alignItems='center'
                    justifyContent='center'>
                    <Text>
                        {valueVIdefense}
                    </Text>
                </Box>
                <Progress.Bar progress={valueVIdefense / 100} width={200} color={'#09ffef'} />
            </Box>
            <Box
                height='30px'
                alignItems='center'
                flexDirections='row'
                marginTop='1px'>
                <Box
                    justifyContent='center'
                    width='60px'
                    height='100%'>
                    <Text fSize={12}>
                        {velocity}
                    </Text>
                </Box>
                <Box
                    height='100%'
                    width='100px'
                    alignItems='center'
                    justifyContent='center'>
                    <Text>
                        {valueVelocity}
                    </Text>
                </Box>
                <Progress.Bar progress={valueVelocity / 100} width={200} color={'#3c7f04'} />
            </Box>
            <Box
                height='30px'
                alignItems='center'
                flexDirections='row'
                marginTop='1px'>
                <Box
                    justifyContent='center'
                    width='60px'
                    height='100%'>
                    <Text fSize={12}>
                        Total
                    </Text>
                </Box>
                <Box
                    height='100%'
                    width='100px'
                    alignItems='center'
                    justifyContent='center'>
                    <Text>
                        {(valueAttack + valueDefense + valueVIattack + valueVIdefense)  }
                    </Text>
                </Box>
                <Progress.Bar progress={(valueAttack + valueDefense + valueVIattack + valueVIdefense ) / 500} width={200} color={'#b303ff'} />
            </Box>

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