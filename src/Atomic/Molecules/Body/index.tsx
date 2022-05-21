import React from 'react';
import ViewBody from './view'
import { PropsBody } from './Models';

const Body:React.FC<PropsBody>=({
children,
})=>{
    return(
        <ViewBody >
            {children}
        </ViewBody>
    )
}
export default Body;