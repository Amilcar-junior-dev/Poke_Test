import React from "react";
import {ScrollView} from 'react-native'
import { BoxContainer } from "../../Atoms/Box";
import {PropsBody} from './Models'

const Body:React.FC<PropsBody>=({
    children
})=>{
    return(
        <BoxContainer >
            <ScrollView>
                {children}
            </ScrollView>
        </BoxContainer>
    )
}
export default Body;