import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import SemiBoldText from '../semi_bold_text';
import {buttonBgColor, buttonTextColor} from '../../constants/colors';

const TouchableButton = ({text, textStyle, buttonStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.buttonStyle, ...buttonStyle}}>
      <SemiBoldText text={text} style={{...styles.textStyle, ...textStyle}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: buttonBgColor,
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    lineHeight: 16.41,
    color: buttonTextColor,
  },
});

export default TouchableButton;
