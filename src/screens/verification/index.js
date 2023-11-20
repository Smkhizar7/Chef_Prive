import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {LeftArrow, VerificationIcon} from '../../assets';
import {
  BoldText,
  IconButton,
  InputField,
  MediumText,
  OtpInput,
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

const Verification = ({navigation, route}) => {
  const [otp, setOtp] = useState();
  console.log('asdsad ', route?.params);
  const {email} = route?.params;
  return (
    <SafeAreaView style={styles.main_container}>
      <ScrollView
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_content_container}>
        <View style={styles.icon_container}>
          <Image source={VerificationIcon} style={styles.verification_icon} />
        </View>
        <MediumText
          text={`Code has been sent to registered email ${email}`}
          style={styles.verification_text1}
        />
        <RegularText
          text={'Please enter 4 digit code'}
          style={styles.verification_text2}
        />
        <OtpInput setState={setOtp} />
        <View style={styles.resend_view}>
          <MediumText
            text={'Didn’t receive code?'}
            style={styles.resend_text}
          />
          <TextButton
            text={'Resend'}
            textFontStyle={'Bold'}
            textStyle={styles.resend_button_text}
            buttonStyle={styles.resend_button}
          />
        </View>
        <TouchableButton
          text={'VERIFY'}
          buttonStyle={styles.verification_button}
          onPress={() => {
            navigation.navigate('NewPassword');
          }}
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
  icon_container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verification_icon: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
  },
  verification_text1: {
    fontSize: 14,
    textAlign: 'center',
    color: textLightGreyColor,
    marginTop: 20,
  },
  verification_text2: {
    fontSize: 14,
    textAlign: 'center',
    color: textBlackColor,
    marginTop: 15,
  },
  resend_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  resend_text: {color: textLightGreyColor, fontSize: 14},
  resend_button_text: {color: textBlueColor, fontSize: 14},
  resend_button: {
    marginLeft: 10,
  },
  verification_button: {
    marginTop: 30,
  },
});

export default Verification;
