import React from 'react';
import { StatusBar } from 'react-native';
import Routes from '../src/Routes/Stack';
import Context from './Context';

const App = () => {
    return (
        <Context>
            <StatusBar backgroundColor="#4e4e4e" />
            <Routes />
        </Context>
    )
}
export default App;