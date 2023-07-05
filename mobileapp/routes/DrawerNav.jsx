import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileStack from './ProfileStack';


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>lalalal</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name='ProfileStack' component={ProfileStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}