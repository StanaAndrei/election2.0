import 'react-native-gesture-handler';
import * as React from 'react';
import HomeStack from './routes/HomeStack';
import AuthStack from './routes/AuthStack';
import { NativeBaseProvider } from 'native-base';
import { axiosInst } from './api';
import DrawerNav from './routes/DrawerNav';

function App() {

    React.useEffect(() => {
        console.log('OK!');
    }, [])

    if (0) {
        return <NativeBaseProvider>
            <AuthStack />
        </NativeBaseProvider>
    }
    return <NativeBaseProvider>
        <DrawerNav />
    </NativeBaseProvider>;
}

export default App;