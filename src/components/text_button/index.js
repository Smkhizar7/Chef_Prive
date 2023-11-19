import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SemiBoldText, BoldText, MediumText, RegularText} from '../index';
import {textYellowColor} from '../../constants/colors';

const TextButton = ({buttonStyle, text, textStyle, textFontStyle, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={buttonStyle} onPress={onPress}>
      {textFontStyle == 'Bold' ? (
        <BoldText text={text} style={{...styles.textStyle, ...textStyle}} />
      ) : textFontStyle == 'Semi-Bold' ? (
        <SemiBoldText text={text} style={{...styles.textStyle, ...textStyle}} />
      ) : textFontStyle == 'Medium' ? (
        <MediumText text={text} style={{...styles.textStyle, ...textStyle}} />
      ) : (
        <RegularText text={text} style={{...styles.textStyle, ...textStyle}} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: textYellowColor,
  },
});

export default TextButton;
