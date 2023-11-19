import { Text } from 'react-native'
import React from 'react'

const BoldText = ({ text, style }) => {
    return (
        <Text style={{ fontFamily: "Gilroy-Bold", ...style }}>{text}</Text>
    )
}

export default BoldText;