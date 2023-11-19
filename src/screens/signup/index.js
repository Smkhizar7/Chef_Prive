import React, {useEffect, useState, useRef} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppleLogo, FacebookLogo, GoogleLogo, Logo} from '../../assets';
import {
  BoldText,
  CheckBox,
  InputField,
  MediumText,
  RegularText,
  SelectInput,
  TextButton,
  TouchableButton,
} from '../../components';
import {
  textBlackColor,
  textBlueColor,
  textLightGreyColor,
} from '../../constants/colors';

const SignUp = ({navigation}) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, []);

  const [visiblePassword, setVisiblePassword] = useState(true);
  const options = ['Facebook', 'Instagram', 'Friend', 'Other'];
  return (
    <SafeAreaView style={styles.main_container}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_content_container}>
        <View style={styles.logo_container}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <BoldText text={'Sign Up'} style={styles.heading} />
        <View style={styles.nameContainer}>
          <InputField
            label={'First Name'}
            placeholder={'First Name'}
            textContentType={'name'}
            containerStyle={styles.nameFields}
          />
          <InputField
            label={'Last Name'}
            placeholder={'Last Name'}
            textContentType={'name'}
            containerStyle={styles.nameFields}
          />
        </View>
        <InputField
          label={'Email'}
          placeholder={'Email Address'}
          textContentType={'emailAddress'}
        />
        <InputField
          label={'Password'}
          placeholder={'Password'}
          textContentType={'password'}
          secureTextEntry={visiblePassword}
          setSecureTextEntry={setVisiblePassword}
        />
        <InputField
          label={'Contact Number'}
          placeholder={'Contact Number'}
          keyboardType={'phone-pad'}
          textContentType={'telephoneNumber'}
        />
        <MediumText text={'How did you find us?'} style={styles.findUsText} />
        <SelectInput
          data={options}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
          defaultButtonText="Select"
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={styles.dropdownBtnTxtStyle}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdownStyle}
          rowStyle={styles.dropdownRowStyle}
          selectedRowTextStyle={styles.selectedRowTextStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
        />
        <CheckBox
          text="Keep me updated with special offers, exciting products and news"
          onPress={() => {}}
        />
        <TouchableButton text={'SIGN UP'} buttonStyle={styles.SignUpButton} />
        <View style={styles.accountView}>
          <RegularText
            text={'Already have an account?'}
            style={styles.accountText}
          />
          <TextButton
            text={'Log In'}
            textFontStyle={'Medium'}
            textStyle={styles.signUpText}
            onPress={() => {
              navigation.navigate('LogIn');
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
  },
  scroll_container: {
    flex: 1,
  },
  scroll_content_container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logo_container: {
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameFields: {
    width: '49%',
  },
  forgetPassword: {
    color: textBlueColor,
    textAlign: 'right',
    fontSize: 14,
  },
  SignUpButton: {
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
  findUsText: {
    fontSize: 12,
    color: textLightGreyColor,
  },
});

export default SignUp;
