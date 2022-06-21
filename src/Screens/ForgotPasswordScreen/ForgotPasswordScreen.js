import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, SetUsername] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('ResetPassword');
  };

  const onSignIn = () => {
    console.warn('onSignIn');

    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Enter your username"
          value={username}
          setValue={SetUsername}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

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

export default ForgotPasswordScreen;
