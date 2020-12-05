import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyle } from '../../../assets/global.style';

export default class PlayerHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={ globalStyle.playerHeader }>
                <TouchableOpacity>
                    <Text style={ globalStyle.playerHeaderText }>{ this.props.nowPlaying }</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
