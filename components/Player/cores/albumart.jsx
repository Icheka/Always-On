import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { globalStyle } from '../../../assets/global.style';
import Card from '../../shared/card';

export default class PlayerAlbumArt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let width = Dimensions.get('window').width;
        let albumArtUri = (this.props.albumArt != '') ? this.props.albumArt : require('../../../assets/defaultAlbumArt.png');
        return (
            <TouchableOpacity>
                <Card style={ styles.card }>
                    <Image source={ albumArtUri } style={{ width: width - 25, height: 300 }} />
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#222',
        borderColor: '#111',
        borderWidth: 1,
        margin: 6
    }
})