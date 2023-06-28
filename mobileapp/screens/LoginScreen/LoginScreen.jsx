import { Input, Heading, VStack, Center, Button, Box, Text, Link, FormControl, HStack, Pressable, Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from 'formik'

function LoginScreen({ navigation }) {
    const [show, setShow] = useState(false);

    return <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {/*
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;//*/
          }}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <Center w="100%">
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
                            <Input 
                                onChangeText={handleChange('email')}
                            />
                            {errors.email && touched.email && errors.email}
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type={show ? 'text' : 'password'}
                                id='pass'
                                name='pass'
                                onChangeText={handleChange}
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
                        {errors.password && touched.password && errors.password}
                        <Button onPress={handleSubmit} disabled={isSubmitting} mt="2" colorScheme="indigo">
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
            </Center>
        )
        }

    </Formik>
}

export default LoginScreen;