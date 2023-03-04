import React, { useState } from 'react';
import {ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import {getHighestPoints, register} from './userbase';

export default function Explore({ navigation }) {
    return (
        <View style={styles.container}>
        <FlatList nestedScrollEnabled={true} style={styles.fairListContainer}
            data={getHighestPoints()}
            renderItem={({item}) => 
            <Text>{item[0]}. {item[1]} {item[2]}</Text>}
        >
        </FlatList>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        
    },

    fairListContainer: {
        backgroundColor: '#D19F3D',
        fontSize: 30,
        
    }
});