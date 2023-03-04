import React from 'react';
import { ScrollView, View, StyleSheet, Image, FlatList, TouchableOpacity, Text} from 'react-native';

export default function Explore({ navigation }) {
    return (
    <ScrollView style={styles.scrollContent}>
        <TouchableOpacity style={styles.touchContent} onPress={() => navigation.navigate('Hack the Future 2023')}>
            <Text style={styles.eventText}>Hack the Future 2023</Text>
            <Image 
            style={styles.image}
            source={require('./../assets/htf.png')}>
            </Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchContent} onPress={() => navigation.navigate('March')}>
            <Text style={styles.eventText}>March Challenge</Text>
            <Image 
            style={styles.image}
            source={require('./../assets/space.jpeg')}>
            </Image>
        </TouchableOpacity>
    </ScrollView>
    );
}

const styles = StyleSheet.create({

    scrollContent: {
        flex: 1,
        margin: 20,
    },

    eventText: {
        flex: 1,
        fontSize: 25,
        marginTop: 20,
        marginBottom: -20,
    },

    touchContent: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowRadius: 1,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
        borderRadius: 20,
        margin: 10,
    },

    image: {
        margin: 30,
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    ray: {
        width: '5%',
        height: '5%',
    }
});