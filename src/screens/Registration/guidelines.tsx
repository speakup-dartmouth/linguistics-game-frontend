import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

class Guidelines extends Component{

  state = {
      close: false
  }

  render(){
    return (
     <View style={styles.container}>
            <Text style={styles.title}>Speak Up Community Guidelines</Text>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: true
                  })
                }
              }}
            >
                <Text style={styles.tcP}>Welcome to the Speak Up community! To ensure a safe and welcoming community for everyone, we have established the following guidelines:</Text>
                    <Text style={styles.tcL}>{'\u2022'} Respectful Language: We expect all users to use respectful language and to avoid any profanity, racism, sexism, ableism, and any other forms of discrimination or hate speech. We do not tolerate derogatory or inflammatory language towards any individual or group.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Mental Health: We take mental health very seriously and ask that all users refrain from discussing or encouraging self-harm, suicide, or any other form of harm to oneself or others. We encourage users to seek professional help and support for mental health issues and to report any concerning content to us.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Controversial Topics: We welcome users to discuss controversial topics, but we ask that all discussions be conducted in a respectful and civil manner. Personal attacks, threats, or harassment will not be tolerated.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Appropriate Content: Users are not allowed to submit any content that is inappropriate, offensive, or illegal. This includes content that is sexually explicit, violent, or discriminatory in nature.</Text>
                    <Text style={styles.tcL}>{'\u2022'} User Conduct: Users must conduct themselves in a responsible and respectful manner. We do not tolerate any bullying, harassment, or hate speech towards other users. Any such behavior will result in immediate suspension or termination of their account.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Topic Suggestions: Users can suggest topics for debate, but we ask that all suggestions be appropriate and respectful. Inappropriate topics include those that promote hate speech, discrimination, or violence towards individuals or groups. Inappropriate topics also include those that are defamatory, fraudulent, or violate intellectual property rights. Users must also respect the privacy of others and not disclose personal information without their consent.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Reporting: If you come across any content that violates our guidelines, please report it to us immediately. We take all reports seriously and will investigate and take appropriate action as necessary.</Text>
                <Text style={styles.tcP}>We reserve the right to remove any content or user that violates our guidelines at any time. By using our app, you agree to abide by our guidelines and to help us maintain a safe and welcoming community for everyone. Thank you for speaking up and contributing to the conversation!</Text>
            </ScrollView>

            <TouchableOpacity disabled={ !this.state.close } onPress={ ()=>alert("Close") } style={ this.state.close ? styles.button : styles.buttonDisabled }><Text style={styles.buttonLabel}>Close</Text></TouchableOpacity>
      </View>
    );
  }

}

const { width , height } = Dimensions.get('window');

const styles = {

    container:{
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10
    },
    titleG: {
        fontSize: 22,
        alignSelf: 'center'
    },
    tcP: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12
    },
    tcL:{
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12
    },
    tcContainer: {
        marginTop: 15,
        marginBottom: 15,
        height: height * .7
    },
  
    button:{
        backgroundColor: '#136AC7',
        borderRadius: 5,
        padding: 10
    },
  
    buttonDisabled:{
      backgroundColor: '#999',
      borderRadius: 5,
      padding: 10
   },
  
    buttonLabel:{
        fontSize: 14,
        color: '#FFF',
        alignSelf: 'center'
    }
  
}

export default Guidelines;