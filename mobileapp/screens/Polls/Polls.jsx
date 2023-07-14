import React from 'react';
import { Text, View, } from 'react-native';
import { Button } from "native-base";

function Polls({ navigation }) {
    return (
        <>
            <Button onPress={() => navigation.navigate('CreatePollScreen')}>new poll</Button>
            <Text>my polls:</Text>
        </>
    );
}

export default Polls;