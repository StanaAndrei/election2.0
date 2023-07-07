import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { Input, Heading, VStack, Center, Button, Box, FormControl, Pressable, Icon, Text, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';

function SettingsScreen({ navigation }) {
    const [show, setShow] = useState(false);

    return <ScrollView>
        <Formik
            initialValues={{ email: '', firstName: '', lastName: '' }}
            onSubmit={(values, actions) => {
                console.log(values);
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
                        <Button mt="2" colorScheme="indigo" onPress={handleSubmit} disabled={isSubmitting} >
                            Update
                        </Button>
                    </VStack>
                </Box>
            </Center>)}
        </Formik>
    </ScrollView>
}

export default SettingsScreen;