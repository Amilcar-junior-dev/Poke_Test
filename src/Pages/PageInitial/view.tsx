import React from 'react';
import { BoxContainer, } from '../../Atomic/Atoms/Box';
import Apresentation from '../../Atomic/Molecules/Apresentation/';
import { PropsPageInitial } from './Models';

const PageInitial: React.FC<PropsPageInitial> = ({
}) => {
    return (
        <BoxContainer
            backgroundColor='#ffffff'>
            <Apresentation />
        </BoxContainer>
    )
}
export default PageInitial;

