import React from 'react';
import { Box } from '../../Atoms/Box';
import { Image } from '../../Atoms/Image';
import { PropsFooter } from './Models';

const Footer: React.FC<PropsFooter> = ({
}) => {
    return (
        <Box
            height='75px'
            alignItems='center'
            justifyContent='center'>
            <Image source={require('../../../Assets/logo.png')}
                style={{
                    width: 250,
                    height: 250
                }} />
        </Box>
    )
}
export default Footer;