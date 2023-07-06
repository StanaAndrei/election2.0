import React, { useState, useEffect } from 'react';
import { Text } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, View, Platform } from 'react-native';

function PicScreen({navigation}) {
    const [image, setImage] = useState(null);

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
            setImage(result.assets[0].uri);
            console.log(result.assets[0].base64);
        }
    };

    const handleUpload = () => {
        //request
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            {image && <Button title="Upload" onPress={handleUpload} /> }
        </View>
    );
}

export default PicScreen;