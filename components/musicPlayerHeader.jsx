import React from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../assets/global.style';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Neumorphic from '../assets/neumorphic';

export default function MusicPlayerHeader(props) {
    return (
        <View style={globalStyle.musicPlayerHeader}>
            <Neumorphic size={48} style={{ marginLeft: 20 }}>
                <AntDesign name="arrowleft" size={20} color={globalStyle.iconHighlight.color} />
            </Neumorphic>

            <View>
                <Text style={globalStyle.nowPlayingText}>{ props.nowPlayingText }</Text>
            </View>
            
            <Neumorphic size={48} style={{ marginRight: 20 }}>
                <Entypo name="menu" size={20} color={globalStyle.iconHighlight.color} />
            </Neumorphic>
        </View>
    )
}