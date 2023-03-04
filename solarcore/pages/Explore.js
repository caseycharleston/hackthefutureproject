import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList, Touchable } from 'react-native';
import Constants from 'expo-constants';
import {getName} from './userbase';

export default function Explore({ navigation }) {
    const [value, setValue] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.selfRankContainer}>
                <Text style={styles.rankText}>Good evening. Amazing progress so far.</Text>
            </View>
            <View style={styles.rowContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate('Events')}}>
                    <Text style={styles.rankText}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Leaderboard')}}>
                    <Text style={styles.rankText}>Leaderboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 8,
    },

    selfRankContainer: {
        alignItems: 'center',
        backgroundColor: '#D19F3D',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        borderRadius: 15,
    },

    rowContainer: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
    },

    rankText: {
        fontSize: 25,
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#D19F3D',
        margin: 5,
        padding: 40,
    },
});