import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyle } from '../../../assets/global.style';
import Card from '../../shared/card';

export default class TrackInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={ globalStyle.trackInfo }>
                <Text style={styles.song}>{this.props.track.song}</Text>
                <View style={
                    {
                        ...globalStyle.separator, ...styles.separator
                    }
                }></View>
                <Text style={styles.artiste}>{this.props.track.artiste}</Text>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    song: {
        fontSize: 26,
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 6
    },
    artiste: {
        fontSize: 22,
        color: 'red',
        textAlign: "center",
        marginTop: 6,
        padding: 3,
        borderRadius: 10,
        marginHorizontal: -5
    },
    separator: {
        width: 70
    }
})