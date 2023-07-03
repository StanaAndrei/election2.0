import React from 'react';
import { View, Text, Heading, Center, Button } from "native-base";

function ProfileScreen({ navigation }) {
    return <View>
            <Heading>
                A component library for the{" "}
                <Heading color="emerald.400">React Ecosystem</Heading>
            </Heading>
            <Text pt="3">
                NativeBase is a simple, modular and accessible component library that
                gives you building blocks to build you React applications.
            </Text>
            <Button>log out</Button>
        </View>;
}

export default ProfileScreen;