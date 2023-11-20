import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {
  textBlackColor,
  textDarkGreyColor,
  textYellowColor,
} from '../../constants/colors';

const OtpInput = ({setState}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const inputs = [];
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setState(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };
  const onFocus = ind => {
    console.log('focus', ind);
    setCurrentIndex(ind);
  };

  const onBlur = () => {
    setCurrentIndex(-1);
  };
  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={[
            styles.box,
            index == currentIndex ? styles.focusBox : styles.blurBox,
          ]}
          maxLength={1}
          secureTextEntry={index !== currentIndex}
          onBlur={onBlur}
          onFocus={() => onFocus(index)}
          keyboardType="numeric"
          onChangeText={value => handleOtpChange(value, index)}
          value={digit}
          ref={input => {
            inputs[index] = input;
          }}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    paddingVertical: 8,
    textAlign: 'center',
    borderBottomWidth: 1.8,
    fontFamily: 'Gilroy-Bold',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  focusBox: {
    fontSize: 24,
    color: textBlackColor,
    borderBottomColor: textYellowColor,
  },
  blurBox: {
    fontSize: 36,
    color: textYellowColor,
    borderBottomColor: textDarkGreyColor,
  },
});
export default OtpInput;
