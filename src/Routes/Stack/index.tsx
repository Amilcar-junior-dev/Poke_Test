import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../Pages/Home';
import Details from '../../Pages/Details';
import PageInitial from '../../Pages/PageInitial';

const Stack = createNativeStackNavigator();

export default function () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PageInitial' screenOptions={{ headerShown: false }} >

                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Details} />
                <Stack.Screen name='PageInitial' component={PageInitial} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}