import React from 'react';
import { Text } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/ProfileScreen/SettingsScreen';
import PicScreen from '../screens/ProfileScreen/PicScreen';
const Stack = createStackNavigator();

function ProfileStack(props) {
    return (<>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Pic" component={PicScreen} />
        </Stack.Navigator>
    </>
    );
}

export default ProfileStack;