import React from 'react';
import { View, Image } from 'react-native';
import { globalStyle } from '../assets/global.style';
import Neumorphic from '../assets/neumorphic';

export default function AlbumArt(props) {
    let source = (props.source !== '' && props.source !== undefined) ? { uri: props.source } : require("../assets/defaultAlbumArt.png");
    // let source = { uri: props.source } || require("../assets/defaultAlbumArt.png");
    // let source = require("../assets/defaultAlbumArt.png");
    return (
        <View style={globalStyle.albumArtContainer}>
            <Neumorphic size={300}>
                <Image style={globalStyle.albumArt} source={source} />
            </Neumorphic>
        </View>
    )
}