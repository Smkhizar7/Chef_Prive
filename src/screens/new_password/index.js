import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import {
  BoldText,
  InputField,
  MediumText,
  TouchableButton
} from '../../components';
import {
  bgWhiteColor,
  textBlackColor,
  textLightGreyColor,
} from '../../constants/colors';

const NewPassword = ({navigation}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  return (
    <SafeAreaView style={styles.main_container}>
      <ScrollView
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_content_container}>
        <BoldText text={'New Password'} style={styles.heading} />
        <MediumText
          text={'Set your new password!'}
          style={styles.description_text}
        />
        <InputField
          label={'Password'}
          placeholder={'Password'}
          textContentType={'password'}
          secureTextEntry={!visiblePassword}
          setSecureTextEntry={setVisiblePassword}
          onChangeText={text => {
            setPassword(text);
          }}
          onBlur={() => {
            if ([undefined, null, ''].includes(password)) {
              setPasswordError('*Please enter password');
            } else if (password.length < 8) {
              setPasswordError('*Password should be 8 characters long.');
            } else {
              setPasswordError(null);
            }
          }}
          error={passwordError}
        />
        <InputField
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          textContentType={'password'}
          secureTextEntry={!visibleConfirmPassword}
          setSecureTextEntry={setVisibleConfirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
          }}
          onBlur={() => {
            if ([undefined, null, ''].includes(password)) {
              setConfirmPasswordError('*Please enter confirm password');
            } else if (password != confirmPassword) {
              setConfirmPasswordError('*Please enter same password.');
            } else {
              setConfirmPasswordError(null);
            }
          }}
          error={confirmPasswordError}
        />
        <TouchableButton
          text={'NEXT'}
          onPress={() => {
            navigation.navigate('NewPasswordSuccess');
          }}
          buttonStyle={styles.new_password_button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: bgWhiteColor,
  },
  scroll_container: {
    flex: 1,
  },
  scroll_content_container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    fontSize: 24,
    marginTop: 30,
    fontWeight: '700',
    color: textBlackColor,
  },
  description_text: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 14,
    color: textLightGreyColor,
  },
  new_password_button: {
    marginTop: 20,
    marginBottom: 15,
  },
});

export default NewPassword;
