import React, { useState } from 'react';
import { Input, Heading, VStack, Center, Button, Box, Text, Link, FormControl, HStack, Pressable, Icon, ScrollView } from 'native-base';
import RNPoll from "react-native-poll";
//import RNAnimated from "react-native-animated-component";
import { View } from 'react-native';
import VoteAPI from '../../api/vote.api';

/*
const choices = [
    { id: 1, choice: "Nike", votes: 12 },
    { id: 2, choice: "Adidas", votes: 1 },
    { id: 3, choice: "Puma", votes: 3 },
    { id: 4, choice: "Reebok", votes: 5 },
    { id: 5, choice: "Under Armour", votes: 9 },
];//*/
function PollView({ navigation, route }) {
    const [choices, setChoices] = React.useState([])
    const [pollData, setPollData] = React.useState(null)
    const [total, setTotal] = React.useState(0);

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
    }, [])

    if (!pollData) {
        return null;
    }

    return (
        <>
            <View>

                <RNPoll
                    hasBeenVoted={pollData.ivoted}
                    appearFrom="left"
                    animationDuration={750}
                    totalVotes={total}
                    choices={choices}
                    onChoicePress={(selectedChoice) =>
                        console.log("SelectedChoice: ", selectedChoice)
                    }
                />

            </View>
        </>
    );
}

export default PollView;