import React from 'react';
import { ScrollView } from 'react-native';

import { BoxContainer, Box } from '../../Atomic/Atoms/Box';
import Description from '../../Atomic/Molecules/Description';
import Measurements from '../../Atomic/Molecules/Measurements';
import Pokemon from '../../Atomic/Molecules/Pokemon';
import HeaderInformation from '../../Atomic/Molecules/HeaderInformation';
import Caracteristics from '../../Atomic/Molecules/Characteristics';
import { PropsDetails } from './Models';

const Details: React.FC<PropsDetails> = ({
    color
}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <BoxContainer
                backgroundColor={color}>
                <HeaderInformation />
                <Box
                    height='100%'
                    backgroundColor='#ffffff'
                    borderRadiusTopLeft='15px'
                    borderRadiusTopRight='15px'>
                    <Pokemon />
                    <Description />
                    <Measurements />
                    <Caracteristics />
                </Box>
            </BoxContainer>
        </ScrollView>
    )
}
export default Details;

