import React from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../assets/global.style';
import Neumorphic from '../assets/neumorphic';

export default function SongDetails(props) {
    return (
        <View style={globalStyle.songDetails}>
            <Text style={globalStyle.songDetailsTitle}>{ props.track.song }</Text>
            <Text style={globalStyle.songDetailsArtiste}>{ props.track.artiste }</Text>
        </View>
    )
}