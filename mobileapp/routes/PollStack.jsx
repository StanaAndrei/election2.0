import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Polls from '../screens/Polls/Polls';
import CreatePollScreen from '../screens/Polls/CreatePollScreen';

const Stack = createStackNavigator();


function PollStack() {
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="PollScreen" component={Polls} />
                <Stack.Screen name="CreatePollScreen" component={CreatePollScreen} />
            </Stack.Navigator>
        </>
    );
}

export default PollStack;