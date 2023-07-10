import { View, Text, Button } from 'react-native';
import i18n from '../../i18n/i18n.config';
import useThemeRepo from '../../repositories/theme.repo';

export default function HomeScreen({ navigation }) {
    const theme = useThemeRepo(state => state.theme)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:  theme.bg}}>
            <Text>{i18n.t('Hi')}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}
