import { Text } from 'react-native'
import React from 'react'

const SemiBoldText = ({ text, style }) => {
    return (
        <Text style={{ fontFamily: "Gilroy-SemiBold", ...style }}>{text}</Text>
    )
}

export default SemiBoldText;