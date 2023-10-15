import { SafeAreaView, Text, View, TextInput, TouchableHighlight, Linking, Pressable, Modal } from "react-native";
import { useState } from 'react';
import CheckBox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./styles";
import Back from 'assets/backArrow.svg';
import { useAppNavigation } from 'navigation/types';
import Steps from "screens/Suggest/steps";

function CreateSuggestion(): JSX.Element {
    const navigation = useAppNavigation();
    const [prompt, onPromptChange] = useState('');
    const [stance1, onStance1Change] = useState('');
    const [stance2, onStance2Change] = useState('');
    const [categories, setCategories] = useState([
        {label: 'Movies', value: 'Movies'},
        {label: 'Art', value: 'Art'},
        {label: 'Sports', value: 'Sports'},
        {label: 'Fashion', value: 'Fashion'},
        {label: 'History', value: 'History'},
        {label: 'Music', value: 'Music'},
        {label: 'Food', value: 'Food'},
        {label: 'Pop Culture', value: 'Pop Culture'},
        {label: 'Youtube', value: 'Youtube'},
        {label: 'Astrology', value: 'Astrology'},
        {label: 'TV', value: 'TV'},
        {label: 'Travel', value: 'Travel'},
    ]);
    const colors = ['#5BC0EB', '#FFC555', '#FB4E4E', '#30CFCD'];
    const [pickedColor, setPickedColor] = useState(['#5BC0EB','#FFC555' ]);
    const [open, setOpen] = useState(false);
    const [category, onCategoryChange] = useState(null);
    const [agree, setAgree] = useState(false);
    const disabled = !prompt || !stance1 || !stance2 || !category || !agree;
    const [showColors, setShowColors] = useState(false);
    const [index, setIndex] = useState(0);
    
    const back = () =>  {
        navigation.goBack();
    }

    const submit = () => {
        const timestamp = new Date().toLocaleString()
        const suggestion = {
            prompt: prompt,
            stances: {
                [stance1]: [pickedColor[0]],
                [stance2]: [pickedColor[1]],
            },
            submitted: timestamp,
            icon: category,
            status: 'review'
        }
        console.log(suggestion)
    }

    function ColorModal() {
        return (
            <Modal
                visible={showColors}
                transparent={true}
            >
                <View style={styles.modal}>
                    <View style={[styles.colorContainer, styles.shadowContainer]}>
                        {colors.map((color) => (
                            <Pressable 
                                key={color} 
                                style={{ ...styles.colorSwatch, backgroundColor: color}} 
                                onPress={() => {
                                    let newColor = pickedColor
                                    newColor[index] = color
                                    setPickedColor(newColor)
                                    setShowColors(false)
                                }}
                            />
                        ))}
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Back style={styles.arrow} onPress={back} />
                <Text style={styles.headerText}>Suggest a Topic</Text>
            </View>
            <Steps />
            <View style={styles.inputContainer}>
                <View>
                    <Text style={styles.labelText}>Prompt</Text>
                    <TextInput
                        onChangeText={(text) => onPromptChange(text)}
                        value={prompt}
                        style={styles.promptInput}
                        placeholder='Socks with sandals?'
                    />
                    <Text style={styles.descriptionText}>The Prompt must contain a maximum of 32 characters</Text>
                </View>
                <View>
                    <Text style={styles.labelText}>Stances</Text>
                    <View style={styles.stanceContainer}>
                        <TextInput
                            onChangeText={(text) => onStance1Change(text)}
                            value={stance1}
                            style={styles.stanceInput}
                            placeholder='Stylish'
                        />
                        
                        <Pressable 
                            style={{ ...styles.colorSwatch, backgroundColor: pickedColor[0] }} 
                            onPress={() => {
                                setIndex(0)
                                setShowColors(true)
                            }}
                        />
                        <ColorModal />
                    </View>
                    <View style={styles.stanceContainer}>
                        <TextInput
                            onChangeText={(text) => onStance2Change(text)}
                            value={stance2}
                            style={styles.stanceInput}
                            placeholder='Fashion Nightmare'
                        />
                        
                        <Pressable 
                            style={{ ...styles.colorSwatch, backgroundColor: pickedColor[1] }} 
                            onPress={() => {
                                setIndex(1)
                                setShowColors(true)
                            }}
                        />
                        <ColorModal />
                    </View>
                </View>
                <View style={{zIndex: 300}}>
                    <Text style={styles.labelText}>Category</Text>
                    <DropDownPicker
                        open={open}
                        value={category}
                        items={categories}
                        setOpen={setOpen}
                        setValue={onCategoryChange}
                        style={styles.dropdown}
                        containerStyle={styles.dropdownContainer}
                        placeholder="Select a Category"
                        textStyle={styles.dropdownText}
                        maxHeight={100}
                    />
                </View>
                <View style={styles.checkboxContainer} >
                    <CheckBox
                    value={agree}
                    onValueChange={setAgree}
                    />
                    <View style={styles.checkboxTextContainer}>
                        <Text style={styles.checkboxLabel}>
                            I have read and accept the{' '}
                        </Text>
                        <TouchableHighlight
                            onPress={() =>
                                Linking.openURL(
                                'https://docs.google.com/document/d/e/2PACX-1vQupXdBR2v-9mViedBKJsPfizik-3FCsZ6WCceiZ7Ra0qHFkEvACIT2bZbhs0hnWO4Wp3tTWUNQLfAQ/pub'
                                )
                            }
                            underlayColor="#f1f1f1"
                            >
                            <Text style={styles.highlightedText}>Speak Up Community Guidelines</Text>
                            </TouchableHighlight>
                    </View>
                </View>
            </View>
            <Pressable
                style={{ ...styles.submitButton, opacity: disabled ? 0.5 : 1}}
                disabled={disabled}
                onPress={submit}
            >
                <Text style={styles.buttonText}>Submit for Review</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default CreateSuggestion;