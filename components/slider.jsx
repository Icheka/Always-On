import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { globalStyle } from '../assets/global.style';
import Neumorphic from '../assets/neumorphic';

export default function Seek(props) {
    return (
        <View>
            <Slider
                minimumValue={props.minValue}
                maximumValue={props.maxValue}
                minimumTrackTintColor={props.minTrackTint}
                maximumTrackTintColor={props.maxTrackTint}
                thumbTintColor={props.thumbTint}
                style={{ ...props.style }}
                value={props.value}
            />
        </View>
    )
}