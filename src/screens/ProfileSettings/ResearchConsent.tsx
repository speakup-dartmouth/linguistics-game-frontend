import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { View, Text, Modal, ScrollView } from 'react-native';
import { useUpdateConsentMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import { useAppSelector } from 'redux/hooks';
import YesNo from 'components/UI/YesNo';
import styles from './styles';
import { CheckBox } from '@rneui/base';
import List from 'components/UI/List';

function ResearchConsent(): JSX.Element {
  const { isRegistering, researchConsent } = useAppSelector((state) => state.auth);
  const [checked, setChecked] = useState<boolean | null>(isRegistering ? true : researchConsent);
  const [updateConsent] = useUpdateConsentMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useAppNavigation();

  const considerations = [
    "The only risk to you in joining the research is someone seeing your answers and hearing your voice"+
    " (without any other personally identifiable information).",
    "You will not be compensated for your participation in the research study.",
    "If you say yes, we will make all of your recordings, survey responses and non-personally"+
    " identifiable background information available to researchers at Dartmouth College and other"+
    " institutions to help them learn about language usage. A copy of these recordings will be publicly"+
    " available from a research website.",
    "We will never give your name or contact information to anyone. This is stored in a secure"+
    " server accessible only to the researchers in our lab.",
    "This app may only be used by adults aged 18 and older.",
    " At any time if you decide to end your participation in the research study but would like to"+
    " continue using the app, you can decline the option to participate in the research study"+
    " by returning to this page from your Profile.",
    " You are always welcome to contact the research team"+
    " with any questions or concerns (see contact information below)."
  ];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onPress = () => {
    updateConsent(checked);

    if (isRegistering) {
      if (checked) {
        navigation.navigate('Demographics');
      }  else {
        navigation.navigate('Categories');
      }   
    } else {
      navigation.navigate('TabNavigator');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.consentHeading}>Welcome to SpeakUp!</Text>
        <Text style={styles.consentSubheading}>We're glad you're here. You're welcome to use this app just for fun, or you can choose to share your voice data with us to help our research.</Text>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.subcontainer}>
              <ScrollView style={styles.modalContent}>
                <Text style={styles.consentHeading}>Research Consent Form</Text>
                <Text style={{paddingTop: 16}}>{'This is a free phone app that involves audio recordings of various conversational topics.'+ 
                'This app may only be used by adults aged 18 and older. This app is developed and managed by a research institution,'+ 
                'Dartmouth College. If you choose to post a recording, other users will be able to listen to your voice. No real names'+ 
                'will be used on this app, but like many public activities on the Internet, if you use this app, you are choosing to make'+ 
                'your voice heard by others publicly. Please keep this in mind as you decide whether not to record your voice on the app.'}</Text>
                <Text style={{paddingBottom: 12, paddingTop: 16}}>{'In addition, this phone app is part of a linguistics research study at Dartmouth College.'+ 
                'Your participation in the research study is voluntary. You may use the app freely without'+ 
                'participating in that research study, or you can choose to participate in the research.'+ 
                'Thank you for considering the possibility of participating in the study. If you would be willing'+ 
                'to participate in the research study, then we need to ask for your permission to include your recordings'+ 
                'and general background information (without your name) in our research database. Also, if you agree to'+ 
                'participate in the research, you will be asked to complete a survey that asks demographic questions and other'+ 
                'questions about yourself. We will protect your confidentiality and will not distribute any personally'+ 
                'identifiable information. Here are some things to think about before making a decision:'}</Text>
               
                <List items={considerations}/>

                <Text style={styles.consentSubheading}>If you have any questions or concerns about the research study, contact James N. Stanford at
                  Dartmouth College (James.N.Stanford@Dartmouth.edu).
                </Text>
  
                <View style={styles.buttonContainer}>
                  <Button onPress={toggleModal} text="Done"/>
                </View>
              </ScrollView>
            </View>
          </Modal>
        <Text style={styles.consentLink} onPress={toggleModal}>Please read the attached document for more information.</Text> 

        <Text style={styles.consentHeading}>Agree to share voice data:</Text>
        <Text style={styles.consentSubheading}>Data will <Text style={{ fontWeight: '700' }}>only</Text> be seen by the Dartmouth Linguistics Department for linguistics research.</Text>

        <View style={styles.checkboxes}>
          <CheckBox checked={checked === true} title="I would like to participate in the research study. I understand that other users will be able to hear my voice recordings that I upload to this app and my voice samples will be used in the research study. No names will be used." onPress={() => { setChecked(checked ? null : true); }} />
          <CheckBox checked={checked === false} title="I would like to use this phone app but not participate in the research study. I understand that other users will be able to hear my voice recordings that I upload to this app, but my voice samples will not be used in the research study. No names will be used." onPress={() => { setChecked(checked !== false ? false : null); }} />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button onPress={onPress} text="Continue" disabled={checked === null} />
        </View>
      </View>
    </View>
  );
}

export default ResearchConsent;
