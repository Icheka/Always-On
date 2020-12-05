import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../assets/global.style';
import Card from '../../shared/card';
import { AntDesign } from '@expo/vector-icons'

export default class Controls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let playingIcon;
        if (this.props.playing == true) {
            playingIcon = 'pause';
        } else {
            playingIcon = 'caretright';
        }
        return (
            <Card style={ globalStyle.controls }>
                <TouchableOpacity style={globalStyle.controls_button}>
                    <AntDesign name="swap" size={26} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.control('prev') } style={globalStyle.controls_button}>
                    <AntDesign name="stepbackward" size={38} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.control('play')} style={globalStyle.controls_button}>
                    <AntDesign name={playingIcon} size={56} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.control('next') } style={globalStyle.controls_button}>
                    <AntDesign name="stepforward" size={38} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={globalStyle.controls_button}>
                    <AntDesign name="retweet" size={26} color="white" />
                </TouchableOpacity>
            </Card>
        );
    }

    control(action) {
        if (action == 'play') {
            console.log('Pause/Play...');
            this.props.pause();
        } else if (action == 'prev') {
            console.log('Previous track...');
            this.props.previous();
        } else if (action == 'next') {
            console.log('Next track...');
            this.props.next();
        }
    }
}

const styles = StyleSheet.create({
    song: {
        fontSize: 26,
        color: 'black',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 6
    },
    artiste: {
        fontSize: 22,
        color: 'red',
        textAlign: "center",
        marginTop: 6,
        backgroundColor: '#eee',
        padding: 3,
        borderRadius: 10,
        marginHorizontal: -5
    },
    separator: {
        width: 70
    }
})