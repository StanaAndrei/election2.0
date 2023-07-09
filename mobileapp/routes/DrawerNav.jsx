import * as React from 'react';
import { Button, View,  } from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator, DrawerItem, DrawerItemList,  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileStack from './ProfileStack';
import { Box, useColorMode, useColorModeValue, Text } from 'native-base';


function NotificationsScreen({ navigation }) {
    return (
        <Box flex={1} bg={'coolGray.700'} width={'100%'} mt={1} safeArea >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>lalalal</Text>
            </View>
        </Box>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    const { toggleColorMode } = useColorMode();

    const text = useColorModeValue('Light', 'Dark');
    const bg = useColorModeValue('wormGrey.50', 'coolGrey.700')

    const handleToggleTheme = () => {
        toggleColorMode();
        console.log('====================================');
        console.log(bg);
        console.log('====================================');
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label={`toggle: ${text}`} onPress={handleToggleTheme} />
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