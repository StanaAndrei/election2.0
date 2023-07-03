import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { Input, Heading, VStack, Center, Button, Box, FormControl, Pressable, Icon, Text, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import UserAPI from "../../api/user.api";

const registerSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
        .min(6)
        .max(50)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/s, 'Passwords must have 1 lower/upper letter, nr, special char'),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match!'),
    firstName: yup.string().required().matches(/^[a-zA-Z]+$/gm),
    lastName: yup.string().required().matches(/^[a-zA-Z]+$/gm)
})

export default function SignupScreen({ navigation, route }) {
    const [show, setShow] = useState(false);
    return <ScrollView>
        <Formik
            initialValues={{ email: '', password: '', cpassword: '', firstName: '', lastName: '' }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
                UserAPI.registerUser(values).then(ok => {
                    if (ok) {
                        actions.resetForm();
                        const { firstName, lastName, email } = values;
                        route.params.onGoBack({
                            message: `Welcome ${firstName} ${lastName}!`,
                            description: `We sent an activation code at ${email}.`,
                            type: 'info'
                        });
                        navigation.goBack();
                    } else {
                        alert("ERROR!");
                        actions.setSubmitting(false);
                    }//*/
                })
                
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (<Center w="100%">
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
                            <FormControl.Label>First name</FormControl.Label>
                            <Input
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                            />
                            <Text>{errors.firstName && touched.firstName && errors.firstName}</Text>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Last name</FormControl.Label>
                            <Input
                                value={values.lastName}
                                onChangeText={handleChange('lastName')}
                            />
                            <Text>{errors.lastName && touched.lastName && errors.lastName}</Text>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input
                                value={values.email}
                                onChangeText={handleChange('email')}
                            />
                            <Text>{errors.email && touched.email && errors.email}</Text>
                        </FormControl>
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
                            Sign up
                        </Button>
                    </VStack>
                </Box>
            </Center>)}
        </Formik>
    </ScrollView>
}
