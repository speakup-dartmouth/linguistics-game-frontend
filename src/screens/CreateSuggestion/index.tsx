import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

function CreateSuggestion(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Suggest a Topic</Text>
        </SafeAreaView>
    )
}

export default CreateSuggestion;