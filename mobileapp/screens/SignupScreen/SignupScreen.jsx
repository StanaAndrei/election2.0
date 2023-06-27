import { MaterialIcons } from "@expo/vector-icons";
import { Input, Heading, VStack, Center, Button, Box, FormControl, Pressable, Icon } from 'native-base';
import React, { useState, useEffect } from 'react';

export default function SignupScreen({ navigation }) {
    const [show, setShow] = useState(false);
    return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" _dark={{
      color: "warmGray.200"
    }} fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type={show ? 'text' : 'password'} 
            InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} 
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type={show ? 'text' : 'password'} 
            InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>}
          />
        </FormControl>
        <Button mt="2" colorScheme="indigo">
          Sign up
        </Button>
      </VStack>
    </Box>
  </Center>;
}
