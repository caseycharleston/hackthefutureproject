
import React from 'react';
import { ScrollView, View, StyleSheet, Image, FlatList, TouchableOpacity, Text} from 'react-native';


export default function Events({ username, navigation }) {
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

const BottomBar = ({username, navigation}) => {
    return (
      <View style={styles.bottom}>
      <TouchableOpacity 
        style={styles.bottom}>
        <Image 
          style={styles.globe}
          source={require('./globe.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom}>
        <Image
          style={styles.icon}
          source={require('./add.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.bottom} 
        onPress={() =>{navigation.navigate('Profile', {
          username: username,
          navigation: navigation,
        })}}>
        <Image
          style={styles.icon}
          source={require('./profile.png')}
        />
      </TouchableOpacity>
      </View>
    );
  }

  const Separate = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
      </View>
    )
  }

const styles = StyleSheet.create({

    scrollContent: {
        flex: 1,
        margin: 10,
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
        borderRadius: 20,
        margin: 20,
    },

    image: {
        margin: 30,
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    bottom: {
      backgroundColor: 'white',
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      height: 10,
      justifyItems: 'center',
      alignItems: 'center',
    },

    globe: {
      resizeMode: 'contain',
      flex: 1,
      flexDirection: 'row',
      width: 150,
      height: 150,
      marginTop: 10,
    },

    icon: {
      resizeMode: 'contain',
      flex: 1,
      flexDirection: 'row',
      width: 150,
      height: 150,
    },

    ray: {
        width: '5%',
        height: '5%',
    }
});