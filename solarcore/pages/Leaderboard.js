import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import {getHighestPoints, register} from './userbase';

register('Casey',)
export default function Explore({ navigation }) {
    return (
        <View style={styles.container}>
        <FlatList
            data={getHighestPoints()}
            renderItem={({item}) => <Text>{item[1]} {item[0]}</Text>}
        >
        </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({

});