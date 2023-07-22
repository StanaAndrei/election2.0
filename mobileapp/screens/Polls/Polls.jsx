import React, { useEffect, useState } from 'react';
import { Text, View, } from 'react-native';
import { Button, Box, Center, } from "native-base";
import PollAPI from '../../api/poll.api';
import useAuthRepo from '../../repositories/auth.repo';
import jwt_decode from 'jwt-decode';
import { useIsFocused } from '@react-navigation/native';

function Polls({ navigation }) {
    const token = useAuthRepo(state => state.token)
    const [data, setData] = useState(null);
    const isFocused = useIsFocused();

    const onGoBack = () => {}

    const fetchPolls = () => {
        PollAPI.getPollsOf(jwt_decode(token).userId).then(res => {
            setData(res.data);
        })
    }

    useEffect(() => {
        isFocused && fetchPolls();
    }, [isFocused])

    return (
        <>
            <Button onPress={() => navigation.navigate('CreatePollScreen', {onGoBack})}>new poll</Button>
            <Text>{data?.firstName}'s polls:</Text>
            {
                data?.polls.reverse().map((elem, id) => {
                    return <Box width="100%" bg="primary.500" p="4" shadow={2} _text={{
                        fontSize: "md",
                        fontWeight: "bold",
                        color: "white"
                      }} ref={null} key={id}>
                          {elem.name}
                        </Box>;
                })
            }
        </>
    );
}

export default Polls;