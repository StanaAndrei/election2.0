import React from 'react';
import { Modal, Button, Input, FormControl, HStack, Text, NativeBaseProvider } from "native-base";
import UserAPI from '../../api/user.api';
import { StatusCodes } from 'http-status-codes';

function Dialog({ setOtpCode }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const placement = 'center';

    const handleProcPress = e => {
        setModalVisible(false)
        UserAPI.getReqRec(email).then(res => {
            if (res.status === StatusCodes.OK) {
                console.log(res);
            } else {
                alert('error')
            }
        })
    }

    const handleOTPCh = text => {
        if (text.length === 6) {
            setOtpCode(text);
        }
    }

    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-start" top="10" size="lg">
            <Modal.Content {...styles[placement]}>
                <Modal.CloseButton />
                <Modal.Header>Forgot Password?</Modal.Header>
                <Modal.Body>
                    Enter email address and we'll send a otp code to reset your password.
                    <FormControl mt="3">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input onChangeText={val => setEmail(val)} />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button flex="1" onPress={handleProcPress}>
                        Proceed
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
        <HStack space={8} alignItems="center" paddingLeft={'15%'}>
            <Button w="104" onPress={() => {
                setModalVisible(!modalVisible);
            }}>
                Recover!
            </Button>
            <Input w="32" onChangeText={handleOTPCh} placeholder="Enter the OTP" _light={{
                placeholderTextColor: "blueGray.700"
            }} _dark={{
                placeholderTextColor: "blueGray.100"
            }} />
        </HStack>
        <Text textAlign="center">
            To reset the password open the modal and follow the instructions.
        </Text>
    </>

}

export default Dialog;

const styles = {}