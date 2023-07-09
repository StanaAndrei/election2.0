import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { Input, Heading, VStack, Center, Button, Box, FormControl, Pressable, Icon, Text, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import UserAPI from '../../api/user.api'
import useAuthRepo from "../../repositories/auth.repo";
import jwt_decode from 'jwt-decode';
import { Modal } from "native-base";
import useThemeRepo from "../../repositories/theme.repo";

function SettingsScreen({ navigation, route }) {
    const { user } = route.params;
    const token = useAuthRepo(state => state.token)
    const [modalVisible, setModalVisible] = React.useState(false);
    const logOut = useAuthRepo(state => state.logOut)

    const handleWantDel = () => {
        setModalVisible(!modalVisible);
    }

    const handleDel = () => {
        UserAPI.delUser(jwt_decode(token).userId).then(res => {
            if (res) {
                logOut();
            } else {
                alert('ERROR!')
            }
        })//*/
    }
    const theme = useThemeRepo(state => state.theme)

    return <ScrollView>
        <Formik
            initialValues={{
                email: `${user.email}`,
                firstName: `${user.firstName}`,
                lastName: `${user.lastName}`
            }}
            onSubmit={(values, actions) => {
                console.log(values);
                console.log(route.params.user);
                UserAPI.updateUser(jwt_decode(token).userId, values).then(res => {
                    if (res) {
                        route.params.onGoBack();
                        navigation.goBack();
                    } else {
                        alert('ERROR!');
                    }
                })//*/
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (<Center height={'100%'} bg={theme.bg} w="100%">
                <Box bg={theme.bg} safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color={theme.fg} _dark={{
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
                                color={theme.fg}
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                            />
                            <Text>{errors.firstName && touched.firstName && errors.firstName}</Text>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Last name</FormControl.Label>
                            <Input
                                color={theme.fg}
                                value={values.lastName}
                                onChangeText={handleChange('lastName')}
                            />
                            <Text>{errors.lastName && touched.lastName && errors.lastName}</Text>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input
                                color={theme.fg}
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
                <Button onPress={handleWantDel} marginTop={'35%'} marginBottom={'0%'} size={'sm'} variant={'outline'} colorScheme={'secondary'}>DELETE ACCOUNT</Button>
            </Center>)}
        </Formik>
        <Modal isOpen={modalVisible} onClose={setModalVisible} size={'sm'}>
            <Modal.Content maxH="212">
                <Modal.CloseButton />
                <Modal.Header>Delete account!</Modal.Header>
                <Modal.Body>
                    <ScrollView>
                        <Text>
                            Are you sure?
                        </Text>
                    </ScrollView>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setModalVisible(false);
                        }}>
                            Cancel
                        </Button>
                        <Button colorScheme={'secondary'} onPress={() => {
                            setModalVisible(false);
                            handleDel();
                        }}>
                            Yes
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </ScrollView>
}

export default SettingsScreen;