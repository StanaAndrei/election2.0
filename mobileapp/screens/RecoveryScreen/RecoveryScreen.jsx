import React, { useEffect, useState } from 'react';
import {Text} from 'native-base'
import Dialog from './Dialog';
import Change from './Change';

function RecoveryScreen({ navigation, route }) {
    const [otpCode, setOtpCode] = useState('');

    return (
        <>
            {
                !otpCode ? <Dialog  setOtpCode={setOtpCode}/> : <Change otpCode={otpCode} route={route} navigation={navigation}/>
            }
        </>
    );
}

export default RecoveryScreen;