import {View, Image, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Logo, GoogleLogo, AppleLogo, FacebookLogo} from '../../assets';
import {
  BoldText,
  InputField,
  MediumText,
  RegularText,
  TextButton,
  TouchableButton,
} from '../../components';
import {
  bgWhiteColor,
  textBlackColor,
  textBlueColor,
  textLightGreyColor,
} from '../../constants/colors';

const Login = ({navigation}) => {
  const [visiblePassword, setVisiblePassword] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.main_container}>
      <ScrollView
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_content_container}>
        <View style={styles.logo_container}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <BoldText text={'Log In'} style={styles.heading} />
        <InputField
          label={'Email'}
          placeholder={'Email Address'}
          textContentType={'emailAddress'}
        />
        <InputField
          label={'Password'}
          placeholder={'Password'}
          textContentType={'password'}
          secureTextEntry={!visiblePassword}
          setSecureTextEntry={setVisiblePassword}
        />
        <TextButton
          text={'Forget Password?'}
          textFontStyle={'Medium'}
          textStyle={styles.forgetPassword}
          onPress={() => {
            navigation.navigate('ForgetPassword');
          }}
        />
        <TouchableButton text={'LOG IN'} buttonStyle={styles.logInButton} />
        <View style={styles.accountView}>
          <RegularText
            text={'Don’t have an account?'}
            style={styles.accountText}
          />
          <TextButton
            text={'Sign Up'}
            textFontStyle={'Medium'}
            textStyle={styles.signUpText}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
        <TextButton
          text={'Continue as guest'}
          textFontStyle={'Semi-Bold'}
          textStyle={styles.guestText}
        />
        <View style={styles.continueView}>
          <View style={styles.horizontalLine} />
          <MediumText text={'Continue with'} style={styles.continueText} />
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.iconsView}>
          <Image source={GoogleLogo} style={styles.googleFacebookLogo} />
          <Image source={FacebookLogo} style={styles.googleFacebookLogo} />
          <Image source={AppleLogo} style={styles.appleLogo} />
        </View>
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
  logo_container: {
    paddingTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 81,
    objectFit: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: textBlackColor,
    marginBottom: 20,
  },
  forgetPassword: {
    color: textBlueColor,
    textAlign: 'right',
    fontSize: 14,
  },
  logInButton: {
    marginTop: 20,
    marginBottom: 15,
  },
  accountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountText: {
    color: textBlackColor,
    textAlign: 'center',
    fontSize: 14,
  },
  signUpText: {
    color: textBlueColor,
    textAlign: 'center',
    fontSize: 14,
    marginLeft: 10,
  },
  guestText: {
    textAlign: 'center',
    marginTop: 10,
  },
  continueView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  continueText: {
    fontSize: 14,
    color: textLightGreyColor,
    marginHorizontal: 21,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: textLightGreyColor,
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  googleFacebookLogo: {
    marginRight: 31,
    width: 38,
    height: 38,
  },
  appleLogo: {
    width: 44,
    height: 44,
  },
});

export default Login;
