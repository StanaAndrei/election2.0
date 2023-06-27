import { Input, Heading, VStack, Center, Button, Box, Text, Link, FormControl, HStack, Pressable, Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
    const [show, setShow] = useState(false);

    return  <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }}>
        Welcome
      </Heading>
      <Heading mt="1" _dark={{
      color: "warmGray.200"
    }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type={show ? 'text' : 'password'} 
            InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} 
          />
          <Link _text={{
          fontSize: "xs",
          fontWeight: "500",
          color: "indigo.500"
        }} alignSelf="flex-end" mt="1">
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{
          color: "indigo.500",
          fontWeight: "medium",
          fontSize: "sm"
        }} onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
}

export default LoginScreen;