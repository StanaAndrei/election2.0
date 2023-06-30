import { Input, Box } from "native-base";

export default function ActivateScreen({ navigation, route }) {
    const handleChange = text => {

        if (text.length === 6) {
            console.log('submit');
            route.params.onGoBack();
            navigation.goBack();
        }
    }

    return <Box alignItems="center">
        <Input variant="underlined" mx="3" placeholder="code" w="50%" onChangeText={handleChange}/>
    </Box>
}