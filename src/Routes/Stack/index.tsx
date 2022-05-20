import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Context from '../../Context/index';

import Home from '../../Pages/Home';
import Details from '../../Pages/Details'

const Stack = createNativeStackNavigator();

export default function () {
    return (
        <NavigationContainer>
            

            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >

                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Details} />

            </Stack.Navigator>

          

        </NavigationContainer>
    )
}