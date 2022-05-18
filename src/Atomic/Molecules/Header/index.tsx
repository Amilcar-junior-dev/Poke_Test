import React from 'react';
import ViewHeader from './view'
import { PropsHeader } from './Models';

const Header:React.FC<PropsHeader> = ({
children,
user,
message
}) => {
    return (
        <ViewHeader
            user=' Ash Ketchum'
            message='Bem vindo!'
        >
            {children}
        </ViewHeader>
    )
}
export default Header;