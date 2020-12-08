import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function NeuMorphic({ children, size, style }) {
    return (
        <View style={ styles.topShadow }>
            <View style={ styles.bottomShadow }>
                <View style={{
                    ...styles.inner,
                    width: size || 40,
                    height: size || 40,
                    borderRadius: size / 2 || 20,
                    ...style
                }}>
                    { children }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topShadow: {
        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#fbffff'
    },
    bottomShadow: {
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#b7c4dd'
    },
    inner: {
        backgroundColor: '#dee9f7',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e2ecfd',
    }
})