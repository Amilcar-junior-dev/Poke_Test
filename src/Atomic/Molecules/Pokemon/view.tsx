import React from 'react';
import {  Box } from '../../Atoms/Box'
import { Image } from '../../Atoms/Image'

import { PropsPokemon } from './Models';

const ViewPokemon: React.FC<PropsPokemon> = ({
pokemonValue
}) => {
    return (
        <Box 
        height='10px' 
        alignItems='center' 
        justifyContent='flex-end'>
            <Image source={require('../../../Assets/buba.png')}
                style={{
                    width: 138,
                    height: 120,
                    position: 'absolute'
                }} />
        </Box>
    )
}
export default ViewPokemon;

