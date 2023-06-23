import { Input, Icon, Stack, Pressable, Button, Box, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from "@expo/vector-icons";

function LoginScreen(props) {
    const [show, setShow] = useState(false);

    return <>
        <Stack space={4} w="100%" alignItems="center" paddingTop={'55%'}>
            <Input w={{
                base: "75%",
                md: "25%"
            }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
            <Input w={{
                base: "75%",
                md: "25%"
            }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Password" />
            <Box alignItems="center">
            <Button onPress={null} size={'lg'}> 
                <Text fontSize="lg">login</Text>
            </Button>
            </Box>
        </Stack>
        
    </>
}

export default LoginScreen;