import React, { useState } from 'react';
import { Input, Heading, VStack, Center, Button, Box, FormControl, Pressable, Icon, Text, ScrollView } from 'native-base';
import { Formik } from 'formik';
import { MaterialIcons } from "@expo/vector-icons";
import * as yup from 'yup';
import UserAPI from '../../api/user.api';

const resetPasswordSchema = yup.object({
    password: yup.string().required()
        .min(6)
        .max(50)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/s, 'Passwords must have 1 lower/upper letter, nr, special char'),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match!'),
})

function Change({ otpCode, navigation, route }) {
    const [show, setShow] = useState(false);
    return (
        <>
            <Formik
                initialValues={{ password: '', cpassword: '' }}
                onSubmit={(values, actions) => {
                    UserAPI.resetPassword({
                        otpCode,
                        password: values.password
                    }).then(res => {
                        if (res) {
                            route.params.onGoBack();
                            navigation.goBack();
                        } else {
                            alert('error!');
                        }
                    })
                }}
                validationSchema={resetPasswordSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Center w="100%">
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
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input
                                        type={show ? 'text' : 'password'}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                        </Pressable>}
                                    />
                                    <Text>{errors.password && touched.password && errors.password}</Text>
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Confirm Password</FormControl.Label>
                                    <Input
                                        type={show ? 'text' : 'password'}
                                        value={values.cpassword}
                                        onChangeText={handleChange('cpassword')}
                                        InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                        </Pressable>}
                                    />
                                    <Text>{errors.cpassword && touched.cpassword && errors.cpassword}</Text>
                                </FormControl>
                                <Button mt="2" colorScheme="indigo" onPress={handleSubmit} disabled={isSubmitting} >
                                    Reset
                                </Button>
                            </VStack>
                        </Box>
                    </Center>
                )
                }
            </Formik>
        </>
    );
}

export default Change;