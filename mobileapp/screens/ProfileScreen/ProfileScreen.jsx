import React, { useEffect, useState } from 'react';
import { Heading, HStack, Spinner, Button } from 'native-base';
import useAuthRepo from '../../repositories/auth.repo';
import UserAPI from '../../api/user.api';
import jwt_decode from 'jwt-decode';
import { SafeAreaView, View, Text, Pressable, Image, TouchableHighlight } from 'react-native';
import tailwind from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function ProfileScreen({ navigation }) {
    const logOut = useAuthRepo(state => state.logOut)
    const token = useAuthRepo(state => state.token)
    const [user, setUser] = useState(null);
    const [utilState, setUtilState] = useState(false);

    useEffect(() => {
        const userId = jwt_decode(token).userId;
        UserAPI.getUser(userId).then(res => {
            setUser(res);
        })
    }, [utilState])

    const handleDel = () => {
        UserAPI.delUser(jwt_decode(token).userId).then(res => {
            if (res) {
                logOut();
            } else {
                alert('ERROR!')
            }
        })
    }

    const handleGoSettings = () => {
        navigation.navigate('Settings', {
            user: user,
            onGoBack: () => setUtilState(prevState => !prevState)
        })
    }

    if (!user) {
        return <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="lg">
                Loading
            </Heading>
        </HStack>;
    }

    return (
        <SafeAreaView style={tailwind`flex-1 bg-slate-50`}>
            <View style={tailwind`flex-1 items-center justify-center gap-8`} >
                <TouchableHighlight onPress={null}>
                    <Image
                        source={{ uri: 'https://source.unsplash.com/random' }}
                        style={tailwind`w-24 h-24 rounded-full`}
                        resizeMode="cover"
                    />
                </TouchableHighlight>
                <View style={tailwind`gap-2 items-center`}>
                    <Text style={tailwind`text-slate-900 text-3xl font-bold`}>{user.fullName}</Text>
                    <Text style={tailwind`text-slate-900 text-lg`}>{user.email}</Text>
                </View>
            </View>
            <View style={tailwind`flex-1 justify-center gap-8`}>
                <Pressable
                    onPress={handleGoSettings}
                    style={tailwind`flex-row items-center gap-2 px-8`}>
                    <Ionicons name="settings-outline" size={24} style={tailwind`text-slate-900`} />
                    <Text style={tailwind`text-slate-900 text-lg`}>Settings</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Pic')}
                    style={tailwind`flex-row items-center gap-2 px-8`}>
                    <Ionicons name="image-outline" size={24} style={tailwind`text-slate-900`} />
                    <Text style={tailwind`text-slate-900 text-lg`}>Profie-picture</Text>
                </Pressable>
                <Pressable onPress={logOut} style={tailwind`flex-row items-center gap-2 px-8`}>
                    <MaterialIcons name="logout" size={24} style={tailwind`text-slate-900`} />
                    <Text style={tailwind`text-slate-900 text-lg`}>Logout</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;