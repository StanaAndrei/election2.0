import React, { useState, useEffect } from 'react';
import { Text, Icon, Button } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { Image, View, Platform } from 'react-native';
import UserAPI from '../../api/user.api';
import useAuthRepo from '../../repositories/auth.repo';
import jwt_decode from 'jwt-decode';
import * as ImageManipulator from 'expo-image-manipulator'
import { Ionicons } from "@expo/vector-icons";
import useThemeRepo from '../../repositories/theme.repo';

function PicScreen({ navigation, route }) {
    const [image, setImage] = useState(null);
    const token = useAuthRepo(state => state.token)

    const resizeImg = async imgUri => {
        const resizedPhoto = await ImageManipulator.manipulateAsync(
            imgUri,
            [{ resize: { width: 200, height: 200 } }], // resize to width of 300 and preserve aspect ratio 
            { compress: 0.7, format: 'jpeg', base64: true },
        );
        return resizedPhoto;
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('result:');

        if (!result.canceled) {
            const res = await resizeImg(result.assets[0].uri)
            console.log('====================================');
            console.log(res.base64.length);
            console.log('====================================');
            setImage(res);
            //console.log(result.assets[0].base64.startsWith('data:image/png;base64,'));
        }
    };

    const handleUpload = () => {
        UserAPI.updateUser(jwt_decode(token).userId, {
            pic: image.base64
        }).then(res => {
            if (res) {
                setTimeout(() => {
                    route.params.onGoBack();
                    navigation.goBack()
                }, 250);
            } else {
                alert('ERROR!')
            }
        })//*/
    }

    const theme = useThemeRepo(state => state.theme)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.bg }}>
            <Button onPress={pickImage}>Pick an image from camera roll</Button>
            {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
            {image && <Button onPress={handleUpload} leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
                Upload
            </Button>}
        </View>
    );
}

export default PicScreen;