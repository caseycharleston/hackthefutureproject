import React from 'react';
import {addEvent, getEvents, getArchivedEvents, getName, getPoints, getTime, getImg} from './EventHandler';
import { View, StyleSheet, Image, FlatList } from 'react-native';

export default function Explore({ navigation }) {
    return (
        <View style={styles.container}>
        <FlatList
            data={getEvents}
            renderItem={({item}) => <Image source={item.getImg()}>item.getName()</Image>}
        >
        </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({

});
