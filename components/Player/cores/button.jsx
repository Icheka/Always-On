import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyle } from '../../../assets/global.style';

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={ globalStyle.custombutton }> 
        <FontAwesome.Button name={props.icon} backgroundColor={props.color} onPress={props.onclick}>
            { props.title }
        </FontAwesome.Button>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
