import { Text } from 'react-native'
import React from 'react'

const RegularText = ({ text, style }) => {
    return (
        <Text style={{ fontFamily: "Gilroy-Regular", ...style }}>{text}</Text>
    )
}

export default RegularText;