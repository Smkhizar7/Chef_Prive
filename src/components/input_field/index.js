import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { bgWhiteColor, textBlackColor, textGreyColor } from '../../constants/colors'
import MediumText from '../medium_text';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputField = ({ placeholder, label, textContentType, keyboardType, secureTextEntry, setSecureTextEntry, maxLength, multiline, inputStyle, containerStyle }) => {
    return (
        <View style={{ ...styles.containerStyle, ...containerStyle }}>
            <MediumText text={label} style={styles.label} />
            <View>
                <TextInput
                    placeholder={placeholder}
                    textContentType={textContentType}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    secureTextEntry={secureTextEntry}
                    multiline={multiline}
                    style={{ ...styles.field, ...inputStyle }}
                />
                {
                    textContentType == "password" ?
                        <TouchableOpacity activeOpacity={0.7} style={styles.eyeButton} onPress={() => { setSecureTextEntry(!secureTextEntry) }}>
                            {secureTextEntry ?
                                <Ionicons name="eye-off" color={textGreyColor} size={20} />
                                :
                                <Ionicons name="eye" color={textGreyColor} size={20} />
                            }
                        </TouchableOpacity>
                        : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10
    },
    label: {
        color: textGreyColor,
        fontSize: 12,
    },
    field: {
        backgroundColor: bgWhiteColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: textBlackColor,
        textDecorationLine: "none",
        fontSize: 14,
        borderRadius: 5,
        fontFamily: "Gilroy-Medium",
    },
    eyeButton: {
        position: "absolute",
        right: 10,
        padding: 5,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default InputField