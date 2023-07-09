import * as React from 'react';
import { Button, View, } from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator, DrawerItem, DrawerItemList, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileStack from './ProfileStack';
import { Box, useColorMode, useColorModeValue, Text } from 'native-base';
import useThemeRepo from '../repositories/theme.repo';
import { THEME_DARK, THEME_LIGHT } from '../constants'

function NotificationsScreen({ navigation }) {
    return (
        <Box flex={1} bg={'#081521'} width={'100%'} mt={1} safeArea >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text color={'white'}>lalalal@!</Text>
            </View>
        </Box>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    const toggleTheme = useThemeRepo(state => state.toggleTheme)
    const theme = useThemeRepo(state => state.theme)

    const handleToggleTheme = () => {
        toggleTheme()
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label={`${theme.name}`} onPress={handleToggleTheme} />
                    </DrawerContentScrollView>
                )
            }}>
                <Drawer.Screen name="HomeStack" component={HomeStack} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name='ProfileStack' component={ProfileStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}