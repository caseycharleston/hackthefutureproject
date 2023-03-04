import React, { useState } from 'react';
import { ScrollView,View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {getFollowers, getPosts} from './userbase';

export default function Home({ username, navigation }) {
    return(
            <View>
                <View style={styles.postStyle}>
                    <Text>
                    Shruti
                    </Text>
                    <Image style={styles.imageStyle} source={require('./shruti.jpg')}></Image>
                    <Text>
                        Throwing away trash properly at Hack the Future!
                    </Text>
                </View>
                <View style={styles.postStyle}>
                    <Text>
                    Casey
                    </Text>
                    <Image style={styles.imageStyle} source={require('./casey.jpg')}></Image>
                    <Text>
                        my awesome sustainable hat
                    </Text>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
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

      postStyle: {
        alignItems: 'center',
      },

      imageStyle: {
        width: '50%',
        height: '50%',
      }
});