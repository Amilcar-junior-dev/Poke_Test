import React, { useContext } from 'react';
import ViewDetails from './view';
import { Context } from '../../Context';

import { PropsDetails } from './Models';

const Details: React.FC<PropsDetails> = ({
}) => {
    const{pokemon}=useContext(Context)
    return (
        <ViewDetails 
        pokemon={pokemon}/>
    )
}
export default Details;