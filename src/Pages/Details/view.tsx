import React from 'react';
import { BoxContainer } from '../../Atomic/Atoms/Box';
import { Text } from '../../Atomic/Atoms/Text';
import { PropsDetails } from './Models'

const Details: React.FC<PropsDetails> = ({ }) => {
    return (
        <BoxContainer backgroundColor='#20f5ca'>
            <Text fSize={40}>
                DETAILS
            </Text>

        </BoxContainer>

    )
}
export default Details;