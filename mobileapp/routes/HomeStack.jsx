import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/Home'
import DetailsScreen from '../screens/DetailScreen/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
import { View, Text, Button } from 'react-native';

export default function HomeStack() {
    return <>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name='Details' component={DetailsScreen} options={{
            headerLeft: () => null,
            headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="black"
                />
            )
        }}/>
        </Stack.Navigator>
        </NavigationContainer>
    </>
}