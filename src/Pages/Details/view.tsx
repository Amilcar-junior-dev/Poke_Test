import React from 'react';
import { ScrollView } from 'react-native';
import { BoxContainer, Box } from '../../Atomic/Atoms/Box';
import { Text } from '../../Atomic/Atoms/Text';
import Description from '../../Atomic/Molecules/Description';
import Measurements from '../../Atomic/Molecules/Measurements';
import Pokemon from '../../Atomic/Molecules/Pokemon';
import HeaderInformation from '../../Atomic/Molecules/HeaderInformation';
import Caracteristics from '../../Atomic/Molecules/Characteristics';
import { PropsDetails } from './Models';






const Details: React.FC<PropsDetails> = ({
}) => {
    return (
        <BoxContainer
            backgroundColor='#20f5ca'>
            <HeaderInformation />
            <Box
                height='450px'
                backgroundColor='#ffffff'
                borderRadiusTopLeft='15px'
                borderRadiusTopRight='15px'>
                <Pokemon />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Description />
                    <Measurements />
                    <Caracteristics />
                </ScrollView>
            </Box>
        </BoxContainer>
    )
}
export default Details;

