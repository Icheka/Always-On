import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { globalStyle } from '../assets/global.style';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Neumorphic from '../assets/neumorphic';

export default function Controls(props) {

    let playIcon;
    console.log(props);
    if (props.isPlaying == true) playIcon = 'ios-pause';
    else
        playIcon = 'ios-play';

    const controls = operation => {
        switch(operation) {
            case 'previous':
                console.log('Stepping -1');
                props.previous();
                break;
            case 'next':
                console.log('Stepping +1');
                props.next();
                break;
            case 'play':
                console.log('Play|Pause');
                props.play();
                break;
            case 'shuffle':
                console.log('Toggled Shuffle');
                props.shuffle();
                break;
            case 'repeat':
                console.log('Toggled Repeat');
                props.repeat();
                break;
        }
    }

    return (
        <View style={globalStyle.controlsContainer}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                <TouchableOpacity onPress={ () => controls('previous') }>
                    <Neumorphic>
                        <Ionicons name='ios-rewind' size={24} />
                    </Neumorphic>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={ () => controls('play') }>
                    <Neumorphic size={70}>
                        <Ionicons name={playIcon} size={45} />
                    </Neumorphic>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => controls('next') }>
                    <Neumorphic>
                        <Ionicons name='ios-fastforward' size={20} />
                    </Neumorphic>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -7 }}>

                <TouchableOpacity onPress={ () => controls('repeat') }>
                    <Neumorphic>
                        <AntDesign name='retweet' size={20} />
                    </Neumorphic>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => controls('shuffle') }>
                    <Neumorphic>
                        <AntDesign name='swap' size={20} />
                    </Neumorphic>
                </TouchableOpacity>

            </View>

        </View>
    )
}