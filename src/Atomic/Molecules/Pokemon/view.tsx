import React, { useContext } from 'react';
import { Box } from '../../Atoms/Box'
import { Image } from '../../Atoms/Image';
import { Context } from '../../../Context';

import { PropsPokemon } from './Models';

const ViewPokemon: React.FC<PropsPokemon> = ({
}) => {
    const { pokemon } = useContext(Context);
    return (
        <Box
            height='10px'
            alignItems='center'
            justifyContent='flex-end'>
            <Image source={{ uri: pokemon.sprites.other.home.front_default }}
                style={{
                    width: 138,
                    height: 120,
                    position: 'absolute'
                }} />
        </Box>
    )
}
export default ViewPokemon;

