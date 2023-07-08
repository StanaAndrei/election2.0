import 'react-native-gesture-handler';
import * as React from 'react';
import AuthStack from './routes/AuthStack';
import { NativeBaseProvider } from 'native-base';
import DrawerNav from './routes/DrawerNav';
import useAuthRepo from './repositories/auth.repo';
import { LogBox } from 'react-native';

function App() {
    const logOut = useAuthRepo(state => state.logOut)

    React.useEffect(() => {
        console.log('OK!');
        //logOut();
        LogBox.ignoreLogs([
            'Non-serializable values were found in the navigation state.',
        ]);
    }, [])

    const token = useAuthRepo(state => state.token);
    if (!token) {
        return <NativeBaseProvider>
            <AuthStack />
        </NativeBaseProvider>
    }
    return <NativeBaseProvider>
        <DrawerNav />
    </NativeBaseProvider>;
}

export default App;