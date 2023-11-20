import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  fieldBgWhiteColor,
  errorTextColor,
  textBlackColor,
  textGreyColor,
} from '../../constants/colors';
import MediumText from '../medium_text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegularText from '../regular_text';

const InputField = ({
  placeholder,
  label,
  textContentType,
  keyboardType,
  secureTextEntry,
  setSecureTextEntry,
  maxLength,
  multiline,
  inputStyle,
  containerStyle,
  onChangeText,
  error,
  onBlur,
  onFocus,
}) => {
  return (
    <View style={{...styles.containerStyle, ...containerStyle}}>
      <MediumText text={label} style={styles.label} />
      <View style={styles.input_container}>
        <TextInput
          placeholder={placeholder}
          textContentType={textContentType}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          style={{...styles.field, ...inputStyle}}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {textContentType == 'password' ? (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.eyeButton}
            onPress={() => {
              setSecureTextEntry(secureTextEntry);
            }}>
            {secureTextEntry ? (
              <Ionicons name="eye-off" color={textGreyColor} size={20} />
            ) : (
              <Ionicons name="eye" color={textBlackColor} size={20} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {error && <MediumText text={error} style={styles.error_text} />}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  label: {
    color: textGreyColor,
    fontSize: 12,
  },
  field: {
    backgroundColor: fieldBgWhiteColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: textBlackColor,
    textDecorationLine: 'none',
    fontSize: 14,
    borderRadius: 5,
    fontFamily: 'Gilroy-Medium',
  },
  input_container: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    padding: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error_text: {
    marginTop: 5,
    fontSize: 12,
    color: errorTextColor,
  },
});

export default InputField;
