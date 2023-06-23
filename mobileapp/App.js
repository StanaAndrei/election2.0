// In App.js in a new project
import * as React from 'react';
import HomeStack from './routes/HomeStack';
import AuthStack from './routes/AuthStack';
import { NativeBaseProvider } from 'native-base';

function App() {
    if (1) {
        return <NativeBaseProvider>
        <AuthStack />
     </NativeBaseProvider>
    }
    return <>
        <HomeStack />
    </>;
}

export default App;