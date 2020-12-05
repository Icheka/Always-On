import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const globalStyle = StyleSheet.create({
    playerHeader: {
        // height: ,
        borderBottomWidth: 2,
        borderBottomColor: '#999',
        paddingVertical: 16,
        fontSize: 30
    },
    playerHeaderText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center'
    },
    basicCard: {
        padding: 6,
        borderRadius: 12,
        borderColor: 'white',
        borderWidth: 1
    },
    trackInfo: {
        borderColor: '#333',
        borderWidth: 1,
        marginHorizontal: 7,
        justifyContent: 'center',
        backgroundColor: '#111'
    },
    separator: {
        backgroundColor: 'hotpink',
        height: 2,
        alignSelf: 'center',
        borderRadius: 10
    },
    controls: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginVertical: 8,
        backgroundColor: '#111',
        marginHorizontal: 6,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: '#333'
    },
    controls_button: {
        borderRadius: 50,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5
    },
    player: {
        backgroundColor: '#111',
        height: height
    },
    seek: {
        height: 6,
        backgroundColor: 'red',
        marginHorizontal: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    seekBar: {
        backgroundColor: '#888',
        borderRadius: 50,
        height: 6,
        width: 200
    },
    buttongroup: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 10
    },
    custombutton: {
        flex: 1,
        marginHorizontal: 10,
    }
})