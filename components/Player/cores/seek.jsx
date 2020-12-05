import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { globalStyle } from '../../../assets/global.style';

export default class Seek extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let width = Dimensions.get('window').width;
        return (
            <View style={{ ...globalStyle.seek, width: width - 20 }}>
                <View style={globalStyle.seekBar}></View>
            </View>
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