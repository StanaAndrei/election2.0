// In App.js in a new project
import * as React from 'react';
import HomeStack from './routes/HomeStack';
import AuthStack from './routes/AuthStack';

function App() {
    if (1) {
        return <>
            <AuthStack/>
        </>
    }
    return <>
        <HomeStack />
    </>;
}

export default App;