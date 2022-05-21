import React, { useContext } from 'react';
import { useRoute} from '@react-navigation/native';

import ViewDetails from './view';


import { PropsDetails } from './Models';

const Details: React.FC<PropsDetails> = ({
}) => {
    const {params} = useRoute()

    const randomColor = (): string => {
        if (parseInt(params.id) % 4 == 0) {
            return "#4de0ac"
        }
        if (parseInt(params.id) % 4 == 1) {
            return "#C64B50"
        }
        if (parseInt(params.id) % 4 == 2) {
            return "#77A4CE"
        }

        return "#FAE48B"
    }

    return (
        <ViewDetails 
        color={randomColor()}
        />
    )
}
export default Details;