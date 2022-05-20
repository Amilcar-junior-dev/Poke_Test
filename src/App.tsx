import React from 'react';
import Routes from '../src/Routes/Stack'
import Context from './Context';

const App = () => {
    return (
        <Context>
            <Routes />
        </Context>
    )
}
export default App;