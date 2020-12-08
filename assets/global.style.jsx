import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const globalStyle = StyleSheet.create({
    iconHighlight: {
        color: '#91a1bd'
    },
    nowPlayingText: {
        color: 'grey',
        textTransform: 'uppercase',
        fontWeight: '800'
    },
    appContainer: {
        flex: 1,
        alignItems: 'center',
    },
    musicPlayerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
    },
    playerView: {
        backgroundColor: '#dee9fd',
        height: height
    },
    albumArt: {
        marginTop: -2,
        width: width - 60,
        height: width - 60,
        borderRadius: (width - 60) / 2,
        borderColor: '#d7e1f3',
        borderWidth: 10
    },
    albumArtContainer: {
        alignItems: 'center',
        marginVertical: 22
    },
    songDetails: {
        alignItems: 'center'
    },
    songDetailsTitle: {
        fontSize: 30,
        color: '#6c7893',
        fontWeight: '600'
    },
    songDetailsArtiste: {
        fontSize: 14,
        color: '#91a1bd',
        marginTop: 6,
        fontWeight: '500'
    },
    trackTimeDetails: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 0,
        width: width - 20,
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    trackTimeDetails_time: {
        fontSize: 15,
        color: '#91a1bd',
        fontWeight: '700'
    },
    controlsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    }
})