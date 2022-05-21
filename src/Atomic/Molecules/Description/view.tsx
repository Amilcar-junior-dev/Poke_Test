import React from 'react';
import { Box } from '../../Atoms/Box';
import { Text } from '../../Atoms/Text';
import { PropsDescriptionView } from './Models';

const Description: React.FC<PropsDescriptionView> = ({
    title,
    description,
}) => {
    return (
        <Box height='160px'>
            <Box
                pd={10}
                borderRadiusTopLeft='25px'
                borderRadiusTopRight='25px'
                height='80px'
                justifyContent='center'>
                <Text
                    color='#1ddcb6'
                    fSize={20}
                    fWeight='bold'>
                    {title}
                </Text>
            </Box>
            <Box
                pd={10}
                height='80px'>
                <Text>
                    {description}
                </Text>
            </Box>
        </Box>
    )
}
export default Description;