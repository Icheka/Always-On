import React, { Component } from 'react';
import { View } from 'react-native';

// services 
import { Audio } from 'expo-av';
import { audioPlaylist } from '../../services/songs';

// cores 
import Header from './cores/header';
import PlayerAlbumArt from './cores/albumart';
import TrackInfo from './cores/trackinfo';
import Controls from './cores/controls';
import Seek from './cores/seek';
import CustomButton from './cores/button';
import ButtonGroup from './cores/buttongroup';
import { globalStyle } from '../../assets/global.style';

export default class Player extends Component {
    constructor(props) {
        super(props);
        const initState = {
            playbackInstance: null,
            currentIndex: 0,
            isPlaying: false,
            track: {
                index: '',
                song: '',
                artiste: '',
                duration: '',
                albumArt: ''
            },
            volume: 1.0,
            isBuffering: false
        }
        this.state = {
            ...initState
        };
    }
    render() {
        return (
            <View style={ globalStyle.player }>
                <Header nowPlaying={"Now Playing from Billboard Top 100"} />
                <View>
                    <PlayerAlbumArt />
                    <TrackInfo track={{ song: this.state.track.song, artiste: this.state.track.artiste }} />
                    <Controls
                        next={ () => this.handlePlayNext() }
                        previous={ () => this.handlePlayPrevious() }
                        pause={ () => this.handlePlayPause() }
                        playing={this.state.isPlaying}
                    />
                    <Seek />
                    <ButtonGroup style={{ marginTop: 25 }}>
                        <CustomButton 
                            icon="heart"
                            title="Like this"
                            color="darkred"
                        />
                        <CustomButton 
                            icon="retweet"
                            title="Share this"
                            color="darkred"
                        />
                    </ButtonGroup>
                </View>
            </View>
        )
    }

    async componentDidMount() {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: true
            });
            this.loadAudio();
            console.log('App loaded. Loading audio file at index 0')
        } catch (err) {
            console.log("Error fetching audio via Audio API :>>", err);
        }
    }

    async loadAudio() {
        const {currentIndex, isPlaying, volume} = this.state;
        try {
            const playbackInstance = new Audio.Sound();
            const source = {
                uri: audioPlaylist[currentIndex].uri
            }
            const status = {
                shouldPlay: isPlaying,
                volume
            }

            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            this.setState({ playbackInstance });
            this.setState({
                track: {
                    ...this.state.track,
                    song: audioPlaylist[currentIndex].title,
                    artiste: audioPlaylist[currentIndex].author,
                    albumArt: audioPlaylist[currentIndex].imageSource
                }
            })
        } catch (err) {
            console.log("Audio was loaded but is unable to play :>>", err);
        }
    }

    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering
        });
    }

    handlePlayPause = async () => {
        const { isPlaying, playbackInstance } = this.state;
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();

        this.setState({ isPlaying: !isPlaying });
    }

    handlePlayPrevious = async () => {
        let { playbackInstance, currentIndex } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            currentIndex < audioPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0);
            this.setState({
                currentIndex
            });
            this.loadAudio();
        }
    }

    handlePlayNext = async () => {
        let { playbackInstance, currentIndex } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            currentIndex < audioPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0);
            this.setState({
                currentIndex
            });
            this.loadAudio();
        }
    }

}