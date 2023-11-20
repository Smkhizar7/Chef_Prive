import React from 'react';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { fieldBgWhiteColor, textBlackColor, textYellowColor } from '../../constants/colors';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SelectInput = ({
    data,
    onSelect,
    buttonTextAfterSelection,
    rowStyle,
    dropdownStyle,
    selectedRowTextStyle,
    rowTextStyle,
    rowTextForSelection,
    defaultButtonText,
    buttonStyle,
    buttonTextStyle
}) => {
    return (
        <SelectDropdown
            data={data}
            onSelect={onSelect}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
            defaultButtonText={defaultButtonText}
            buttonStyle={{ ...styles.dropdownBtnStyle, ...buttonStyle }}
            buttonTextStyle={{ ...styles.dropdownBtnTxtStyle, ...buttonTextStyle }}
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={textYellowColor} size={16} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={{ ...styles.dropdownStyle, ...dropdownStyle }}
            rowStyle={{ ...styles.dropdownRowStyle, ...rowStyle }}
            selectedRowTextStyle={{ ...styles.selectedRowTextStyle, ...selectedRowTextStyle }}
            rowTextStyle={{ ...styles.dropdownRowTxtStyle, ...rowTextStyle }}
        />
    )
}
const styles = StyleSheet.create({
    dropdownBtnStyle: {
        width: "100%",
        height: 50,
        backgroundColor: fieldBgWhiteColor,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    dropdownBtnTxtStyle: {
        color: textBlackColor,
        textAlign: 'left',
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Gilroy-Medium",
    },
    dropdownStyle: {
        padding: 15,
        borderRadius: 5,
        height: 150,
        backgroundColor: "#fff",
        shadowOffset: { width: -2, height: 5 },
        shadowColor: "A1A1A1",
        shadowOpacity: 0.25,
        shadowRadius: 0
    },
    dropdownRowStyle: {
        backgroundColor: '#fff',
        borderColor: "#fff",
        height: 20,
        marginBottom: 10
    },
    dropdownRowTxtStyle: {
        textAlign: 'left',
        color: "#1F1F1F66",
        fontSize: 14,
        fontFamily: "Gilroy-Medium"
    },
    selectedRowTextStyle: {
        color: textBlackColor,
    },
})

export default SelectInput 