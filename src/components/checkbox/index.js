import {StyleSheet} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { textBlackColor } from '../../constants/colors';

const CheckBox = ({
  size,
  fillColor,
  unfillColor,
  text,
  iconStyle,
  checkbox_container,
  innerIconStyle,
  textStyle,
  onPress,
}) => {
  return (
    <BouncyCheckbox
      size={size ? size : 20}
      fillColor={fillColor ? fillColor : '#1F1F1F33'}
      unfillColor={unfillColor ? unfillColor : '#FFFFFF'}
      text={text}
      iconStyle={{...styles.iconStyle, ...iconStyle}}
      style={{...styles.checkbox_container, ...checkbox_container}}
      innerIconStyle={{...styles.innerIconStyle, ...innerIconStyle}}
      textStyle={{...styles.textStyle, ...textStyle}}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  iconStyle: {borderColor: '#1F1F1F33', borderRadius: 3},
  innerIconStyle: {borderWidth: 0.8, borderRadius: 3},
  checkbox_container: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  textStyle: {
    color: textBlackColor,
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    lineHeight: 18,
    textDecorationLine: 'none',
  },
});

export default CheckBox;
