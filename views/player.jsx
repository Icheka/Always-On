import React, { Component } from 'react';

// services 
import { Audio } from 'expo-av';
import { audioPlaylist } from '../services/songs';

// cores 
import { View } from 'react-native';
import { globalStyle } from '../assets/global.style';
import MusicPlayerHeader from '../components/musicPlayerHeader';
import AlbumArt from '../components/albumArt';
import SongDetails from '../components/songDetails';
import TrackTimeDetails from '../components/trackTimeDetails';
import Controls from '../components/controls';


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
            isBuffering: false,
            repeatOn: false,
            shuffleOn: false,
            positionMillis: ''
        }
        this.state = {
            ...initState
        };
    }

    render() {
        return (
            <View style={globalStyle.playerView}>
                <MusicPlayerHeader nowPlayingText={"now playing"} />
                <AlbumArt source={ this.state.track.albumArt } />
                <SongDetails
                    track={{
                        song: this.state.track.song,
                        artiste: this.state.track.artiste
                    }}
                />
                <TrackTimeDetails
                    isPlaying={ this.state.isPlaying }
                    duration={ this.state.track.duration }
                    position={ this.state.positionMillis }
                />
                <Controls
                    next={ () => this.handlePlayNext() }
                    previous={ () => this.handlePlayPrevious() }
                    play={ () => this.handlePlayPause() }
                    repeat={ () => this.handleToggleRepeat() }
                    shuffle={ () => this.handleToggleShuffle() }
                    isPlaying={ this.state.isPlaying }
                    repeatOn={ this.state.repeatOn }
                    shuffleOn={ this.state.shuffleOn }
                />
            </View>
        )
    }

    async componentDidMount() {
        // on mount, initialize @expo-av Audio
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
        console.log("Attempting to play index :>>", currentIndex);
        try {
            const playbackInstance = new Audio.Sound();
            const source = {
                uri: audioPlaylist[currentIndex].uri,
                downloadFirst: false
            }
            const status = {
                shouldPlay: isPlaying,
                volume
            }

            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            playbackInstance.getStatusAsync()
                .then(result => this.setState({ track: { ...this.state.track, duration: result }}))
                .catch(err => console.log(`Failed to get song duration for track at index ${this.state.index} :>>`, err));
            this.setState({ playbackInstance });
            this.setState({
                track: {
                    ...this.state.track,
                    song: audioPlaylist[currentIndex].title,
                    artiste: audioPlaylist[currentIndex].author,
                    albumArt: audioPlaylist[currentIndex].imageSource,
                }
            })
            console.log("Album art :>>". this.state.albumArt);
        } catch (err) {
            console.log("Audio was loaded but is unable to play :>>", err);
        }
    }

    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering,
            positionMillis: status.positionMillis,
            track: {
                ...this.state.track,
                duration: status.durationMillis
            }
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

    generateRandomNumberForShuffling() {
        console.log("Generating random number for shuffling...");
        return audioPlaylist.indexOf(audioPlaylist[Math.floor(Math.random() * audioPlaylist.length)]);
    }

    handlePlayNext = async () => {
        let { playbackInstance, currentIndex } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
                    
                    //:>> check if repeat is off, and do not repeat if it is

            if ((this.state.repeatOn !== true) && (this.state.shuffleOn !== true)) {
                // load the next file or wrap to the first
                currentIndex < audioPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0);
            
                    //:>> now check if repeat is on and shuffle is on, repeat if they are 

            } else if ((this.state.repeatOn == true) && (this.state.shuffleOn == true)) {
                // currentIndex < audioPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0);
                currentIndex = currentIndex;
            
                //:>> now check if repeat is off and shuffle is on, shuffle if they are 

            } else if ((this.state.repeatOn !== true) && (this.state.shuffleOn == true)) {
                let nextIndex = this.generateRandomNumberForShuffling();
                console.log("Next Index :>>", nextIndex);
                currentIndex = nextIndex;
            }
            // update the 'currentIndex' 
            this.setState({
                currentIndex
            });
            this.loadAudio();
        }
    }

    handleToggleShuffle() {
        this.setState({
            shuffleOn: !this.state.shuffleOn
        });
        console.log("Toggled suffle");
    }

    handleToggleRepeat() {
        this.setState({
            repeatOn: !this.state.repeatOn
        });
        console.log("Toggled repeat");
    }
}