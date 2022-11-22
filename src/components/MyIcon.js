import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MyIcon(props) {
  let name = props.name || 'help';
  return (
    <Icon
      {...props}
      size={props.size || 30}
      name={props.outline ? name + '-outline' : name}
    />
  );
}
