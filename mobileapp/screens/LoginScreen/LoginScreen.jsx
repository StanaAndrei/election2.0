import { Input, Heading, VStack, Center, Button, Box, Text, Link, FormControl, HStack, Pressable, Icon, ScrollView } from 'native-base';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from 'formik'
import * as yup from 'yup';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import * as SecureStore from 'expo-secure-store';
import SessionApi from '../../api/session.api';

const loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
        .min(6)
        .max(50)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/g)
})

function LoginScreen({ navigation, route }) {
    const [show, setShow] = useState(false);

    const handleGoSignUp = () => {
        navigation.navigate('Signup', {
            onGoBack: (fmdata) => {
                showMessage({
                    message: fmdata.message,
                    description: fmdata.description,
                    type: fmdata.type,
                    duration: 6000
                });//*/
            }
        })
    }

    const handleGoActivate = () => {
        navigation.navigate('Activate', {
            onGoBack: () => {
                showMessage({
                    message: 'Activation successful!',
                    type: 'success',
                    duration: 3000
                });//*/
            },
        })
    }

    return <ScrollView>
        <FlashMessage position="top" />
        <Formik
            initialValues={{ email: '', password: '' }}
            //validationSchema={loginSchema}
            onSubmit={(values, actions) => {
                //actions.resetForm();
                SessionApi.createSession(values).then(token => {
                    if (token) {
                        console.log(token);
                    } else {
                        alert('LOGIN FAILED!');
                    }
                })
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
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
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                />
                                <Text>{errors.email && touched.email && errors.email}</Text>
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>
                                <Input type={show ? 'text' : 'password'}
                                    id='pass'
                                    name='pass'
                                    value={values.password}
                                    onChangeText={handleChange('password')}
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
                            <Text>{errors.password && touched.password && errors.password}</Text>
                            <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
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
                                }} onPress={handleGoSignUp}>
                                    Sign Up
                                </Link>
                            </HStack>
                            <Link paddingLeft={'30%'} alignContent={'center'} _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }} onPress={handleGoActivate}>
                                    Activate account!
                            </Link>
                        </VStack>
                    </Box>
                </Center>
            )
            }

        </Formik>
    </ScrollView>
}

export default LoginScreen;