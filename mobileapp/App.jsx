import 'react-native-gesture-handler';
import * as React from 'react';
import AuthStack from './routes/AuthStack';
import { NativeBaseProvider } from 'native-base';
import DrawerNav from './routes/DrawerNav';
import useAuthRepo from './repositories/auth.repo';
import { LogBox } from 'react-native';
import useThemeRepo from './repositories/theme.repo';
import en from './i18n/translations/en.json';

function App() {
    const logOut = useAuthRepo(state => state.logOut)
    const toggleTheme = useThemeRepo(state => state.toggleTheme);

    React.useEffect(() => {
        console.log('OK!');
        //logOut()
        console.log('====================================');
        console.log(en);
        
        console.log('====================================');
        /*
        setTimeout(() => {
            toggleTheme();///for a start bug
        }, 500);//*/
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