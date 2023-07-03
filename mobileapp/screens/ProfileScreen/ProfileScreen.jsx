import React, { useEffect, useState } from 'react';
import { Heading, Text, HStack, Spinner, Button } from 'native-base';
import useAuthRepo from '../../repositories/auth.repo';
import UserAPI from '../../api/user.api';
import jwt_decode from 'jwt-decode';
import { LogBox } from 'react-native';

function ProfileScreen({ navigation }) {
    const logOut = useAuthRepo(state => state.logOut)
    const token = useAuthRepo(state => state.token)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userId = jwt_decode(token).userId;
        console.log(userId);
        UserAPI.getUser(userId).then(res => {
            console.log(res);
            setUser(res);
        })
    }, [])

    if (!user) {
        return <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="lg">
                Loading
            </Heading>
        </HStack>;
    }

    return (
        <>
            <Text fontSize="5xl">{user.fullName}</Text>
            <Button onPress={logOut}>logout</Button>
        </>
    );
}

export default ProfileScreen;