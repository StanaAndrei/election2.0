import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
    return <>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}  />
        </Stack.Navigator>
        </NavigationContainer>
    </>
}