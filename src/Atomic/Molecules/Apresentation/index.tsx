import React,{useContext} from 'react';
import ViewApresentation from './view';

import { PropsApresentation} from './Models';

const Apresentation: React.FC<PropsApresentation> = ({
   
}) => {
    
    return (
        <ViewApresentation
        load='Caregando...'
        />
    )
}
export default Apresentation;