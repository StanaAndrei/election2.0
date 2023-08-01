import React from 'react';
import { Input, Heading, VStack, Center, Button, Box, Text, Link, FormControl, HStack, Pressable, Icon, ScrollView } from 'native-base';
import RNPoll from "react-native-poll";
//import RNAnimated from "react-native-animated-component";
import {View} from 'react-native';


const choices = [
    { id: 1, choice: "Nike", votes: 12 },
    { id: 2, choice: "Adidas", votes: 1 },
    { id: 3, choice: "Puma", votes: 3 },
    { id: 4, choice: "Reebok", votes: 5 },
    { id: 5, choice: "Under Armour", votes: 9 },
];
function PollView({ navigation, route }) {
    return (
        <>
            <View>
                <RNPoll
                    appearFrom="left"
                    animationDuration={750}
                    totalVotes={30}
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