import { Input, Box } from "native-base";
import UserAPI from "../../api/user.api";

export default function ActivateScreen({ navigation, route }) {
    const handleChange = text => {

        if (text.length === 6) {
            console.log('submit');
            UserAPI.activateUser(text).then(res => {
                if (res) {
                    route.params.onGoBack();
                    navigation.goBack();
                } else {
                    alert('error!');
                }
            })
        }
    }

    return <Box alignItems="center">
        <Input maxLength={6} variant="underlined" mx="3" placeholder="code" w="50%" onChangeText={handleChange}/>
    </Box>
}