import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import ActivateScreen from '../screens/LoginScreen/ActivateScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
    return <>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name="Signup" component={SignupScreen}  />
            <Stack.Screen name="Activate" component={ActivateScreen}  />
        </Stack.Navigator>
        </NavigationContainer>
    </>
}