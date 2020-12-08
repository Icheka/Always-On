import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { globalStyle } from '../assets/global.style';
import Neumorphic from '../assets/neumorphic';
import Seek from './slider';

export default function TrackTimeDetails(props) {
    
    let duration, position, durationInSecs, positionInSecs, unitPositLength, increment;
        var positLength = 30;
        let width = Dimensions.get('window').width;
        // get track duration and current position in milliseconds 
        // passed as prop from <Player /> 
        duration = props.duration;
        position = props.position;

        // console.log("Track duration :>>", duration);
        // console.log("Track position :>>", position);

        durationInSecs = parseInt(duration) / 1000;
        positionInSecs = parseInt(position) / 1000;

        // algo for calculating length of seek based on 
        // current position of track
        /*
        if duration == 120 secs,
        if width of screen == 300,
        then:
            300 = 120
            x = 1
            ==========
            x = (300 * 1) / 120
            ==========
            :- x (unitPositLength) = (width / durationInSecs)
        */
       unitPositLength = (width / durationInSecs);
    //    console.log("Unit posit length :>>", unitPositLength);

        if ((positionInSecs == null) || (Number.isNaN(positionInSecs) == true) || (unitPositLength == null) || (Number.isNaN(unitPositLength) == true)) {
            positLength = 0;
        } else {
            positLength = unitPositLength * positionInSecs;   
        }
    //     console.log("Type of position in secs :>>", typeof positionInSecs);
    //     console.log("Type of unit posit :>>", typeof unitPositLength);

    //    console.log("PositLength :>>", positLength);
    //  
    let maxValue;
    if (Number.isNaN(durationInSecs) == true) maxValue = 100;
    else
        maxValue = durationInSecs;

    return (
        <View style={globalStyle.trackTimeDetails}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={globalStyle.trackTimeDetails_time}>{ positLength }</Text>
                <Text style={globalStyle.trackTimeDetails_time}>{ maxValue }</Text>
            </View>
            <Seek
                minValue={0}
                maxValue={ maxValue }
                minTrackTint='#8aaaff'
                maxTrackTint='gold'
                thumbTint='#7b9bff'
                style={{ marginTop: 4 }}
                value={ positLength }
            />
        </View>
    )
}