import React, { useEffect } from 'react';
import { View, Text, Heading, Center, Button } from "native-base";
import useAuthRepo from '../../repositories/auth.repo';
import { axiosInst } from '../../api';

function ProfileScreen({ navigation }) {
    const logOut = useAuthRepo(state => state.logOut)

    useEffect(() => {

    }, [])

    return <View>
            <Heading>
                profile{" "}
                <Heading color="emerald.400"></Heading>
            </Heading>
            <Text pt="3">
                
            </Text>
            <Button onPress={logOut}>log out</Button>
        </View>;
}

export default ProfileScreen;