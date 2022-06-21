import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [username, SetUsername] = useState('');
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen')
  };

  const onSignIn = () => {
    navigation.navigate('SignIn')
  };

  const onResendCode = () => {
    console.warn('onResendCode');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>

        <CustomInput
          placeholder="Enter your username"
          value={username}
          setValue={SetUsername}
        />

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendCode}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignIn}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    color: 'gray',
    margin: 5,
  },
  link: {
    color: '#FDB075',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 30,
    color: '#f27321',
  },
});

export default ConfirmEmailScreen;
