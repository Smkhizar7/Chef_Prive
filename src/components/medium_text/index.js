import { Text } from 'react-native'
import React from 'react'

const MediumText = ({ text, style }) => {
    return (
        <Text style={{ fontFamily: "Gilroy-Medium", ...style }}>{text}</Text>
    )
}

export default MediumText;