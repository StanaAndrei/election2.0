import React, { useState } from 'react';
import { Input, Heading, VStack, Center, Button, Box, Text, Link, FormControl, HStack, Pressable, Icon, ScrollView } from 'native-base';
import RNPoll from "react-native-poll";
//import RNAnimated from "react-native-animated-component";
import { View } from 'react-native';
import VoteAPI from '../../api/vote.api';

function PollView({ navigation, route }) {
    const [choices, setChoices] = React.useState([])
    const [pollData, setPollData] = React.useState(null)
    const [total, setTotal] = React.useState(0);
    const [ch, setCh] = React.useState(0)

    React.useEffect(() => {
        (async function () {
            const data = await VoteAPI.getPollWithVotes(route.params.id);
            let choices = [];
            console.log(data);
            let sum = 0;
            for (let i = 0; i < data.options.length; i++) {
                choices.push({
                    id: i,
                    choice: data.options[i],
                    votes: data.votesOf[i]
                })
                sum += data.votesOf[i]
            }//*/
            setChoices(choices);
            setPollData(data);
            setTotal(sum)
        })();
    }, [ch])

    if (!pollData) {
        return null;
    }

    const handleVoteSub = (sc) => {
        console.log(sc);
        VoteAPI.addVote({
            pollId: route.params.id,
            optionNr: sc.id,
        }).then(res => {
            if (res) {
                setCh(ch ^ 1)
            } else {
                alert('ERROR');
            }
        })
    }

    return (
        <>
            <View>

                <RNPoll
                    hasBeenVoted={pollData.ivoted}
                    appearFrom="left"
                    animationDuration={500}
                    totalVotes={total}
                    choices={choices}
                    onChoicePress={handleVoteSub}
                />

            </View>
        </>
    );
}

export default PollView;