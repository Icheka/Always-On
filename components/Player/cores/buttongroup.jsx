import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../assets/global.style';

export default function ButtonGroup(props) {
    return (
        <View style={{ ...globalStyle.buttongroup, ...props.style }}>
            { props.children }
        </View>
    )
}