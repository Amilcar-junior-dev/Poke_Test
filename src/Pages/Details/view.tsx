import React from 'react';
import { BoxContainer, Box } from '../../Atomic/Atoms/Box';
import { Text } from '../../Atomic/Atoms/Text';
import Description from '../../Atomic/Molecules/Description';
import Measurements from '../../Atomic/Molecules/Measurements';
import { PropsDetails } from './Models';



const Details: React.FC<PropsDetails> = ({
    description,
}) => {
    return (
        <BoxContainer
            backgroundColor='#20f5ca'>
            <Box
                justifyContent='flex-end'
                height='100%'>
                <Box
                    height='450px'
                    backgroundColor='#fff'
                    borderRadiusTopLeft='25px'
                    borderRadiusTopRight='25px'>
                   <Description />
                   <Measurements />
                   

                </Box>
            </Box>
        </BoxContainer>
    )
}
export default Details;

/*




*/