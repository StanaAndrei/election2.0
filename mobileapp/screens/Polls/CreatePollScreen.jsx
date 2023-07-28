import React from 'react';
import { Formik } from 'formik'
import {
    Input, Heading, DatePicker,
    TextArea, VStack,
    Center, Button, Box,
    Text, Checkbox, FormControl,
    HStack, Pressable, Icon, ScrollView
} from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import PollAPI from '../../api/poll.api';

const INI_NR_INP = 2;
const INI_ARR = Array.from({
    length: INI_NR_INP
}, () => '')

function CreatePollScreen({ navigation, route }) {

    const [options, setOptions] = React.useState(INI_ARR)
    const [isPublic, setisPublic] = React.useState(false);

    const handlePlus = () => {
        setOptions(prev => [...prev, ''])
    }

    const handleOptChange = (text, id) => {
        const updatedOptions = [...options];
        updatedOptions[id] = text;
        setOptions(updatedOptions);
    }

    const handleMinus = () => {
        if (options.length === INI_NR_INP) {
            return
        }
        const updatedItems = [...options];
        updatedItems.pop();
        setOptions(updatedItems);//*/
    }

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <Formik
                initialValues={{ name: '', desc: '' }}
                //validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    //actions.resetForm();
                    const pollData = {
                        ...values,
                        options,
                        isPublic
                    }
                    PollAPI.createPoll(pollData).then(res => {
                        if (res) {
                            route.params.onGoBack();
                            navigation.goBack();
                        } else {
                            alert('ERROR!')
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
                            <Heading mt="1" _dark={{
                                color: "warmGray.200"
                            }} color="coolGray.600" fontWeight="medium" size="xs">
                                Create new poll:
                            </Heading>

                            <VStack space={3} mt="5">
                                <FormControl>
                                    <FormControl.Label>title ID</FormControl.Label>
                                    <Input
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Description</FormControl.Label>
                                    <TextArea onChangeText={handleChange('desc')} value={values.desc} h={20} placeholder="Not required" w="75%" maxW="300" />
                                </FormControl>
                                {
                                    [...Array(options.length)].map((_, id) => {
                                        return <Input
                                            onChangeText={text => handleOptChange(text, id)}
                                            value={options[id]}
                                            key={id}
                                            placeholder={`option ${id + 1}`}
                                        />
                                    })
                                }
                                <HStack>
                                    <Button ml={'115px'} mr={'20px'} width={'70px'} onPress={handlePlus} mt="2" colorScheme="indigo">
                                        +
                                    </Button>
                                    <Button width={'70px'} onPress={handleMinus} mt="2" colorScheme="indigo">
                                        -
                                    </Button>
                                </HStack>
                                <Checkbox
                                    onChange={() => setisPublic(!isPublic)}
                                    shadow={2} colorScheme={'indigo'}
                                    value={isPublic}
                                >
                                    public?
                                </Checkbox>
                                <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
                                    Submit
                                </Button>
                                <HStack mt="6" justifyContent="center">
                                </HStack>
                            </VStack>
                        </Box>
                    </Center>
                )
                }

            </Formik>
        </ScrollView>
    );
}

export default CreatePollScreen;