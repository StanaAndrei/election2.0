import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Polls from '../screens/Polls/Polls';

const Stack = createStackNavigator();


function PollStack(props) {
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="PollScreen" component={Polls} />
            </Stack.Navigator>
        </>
    );
}

export default PollStack;