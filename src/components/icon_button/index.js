import {TouchableOpacity} from 'react-native';
import React from 'react';

const IconButton = ({buttonStyle, icon, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={buttonStyle} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
