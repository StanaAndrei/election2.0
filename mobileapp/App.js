import 'react-native-gesture-handler';
import * as React from 'react';
import HomeStack from './routes/HomeStack';
import AuthStack from './routes/AuthStack';
import { NativeBaseProvider } from 'native-base';
import { axiosInst } from './api';
import DrawerNav from './routes/DrawerNav';
import useAuthRepo from './repositories/auth.repo';

function App() {

    React.useEffect(() => {
        console.log('OK!');
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