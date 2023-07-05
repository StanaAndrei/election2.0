import React from 'react';
import { Text } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/ProfileScreen/SettingsScreen';
const Stack = createStackNavigator();

function ProfileStack(props) {
    return (<>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    </>
    );
}

export default ProfileStack;