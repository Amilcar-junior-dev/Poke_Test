import React from 'react';
import ViewPageInitial from './view';
import { useNavigation } from '@react-navigation/native';

import { PropsPageInitial } from './Models';

const PageInitial: React.FC<PropsPageInitial> = ({

}) => {
    const navigation =useNavigation();
    setTimeout(()=>{
        navigation.replace("Home")
    },3000)

    return (
        <ViewPageInitial />
    )
}
export default PageInitial;