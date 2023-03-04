import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import {getUserInfo} from './userbase'

export default function Profile({username, navigation}) {
  const user = getUserInfo(username)
    const TopBar = () => {
    return (
      <View> 
        <Image
          style={styles.image}
          source={require('./earth.png')}
       />
      </View>
    );
  }

  const Middle = () => {
    return (
      <View style={styles.middle}>
          <Text style={styles.middleText}>Welcome {user.getName()}!</Text>
          <Text style={styles.middleText}>You have {user.getPoints()} Rays</Text>
      </View>
    );
  }

  const BottomBar = () => {
    return (
      <View style={styles.bottom}>
      <TouchableOpacity 
        style={styles.bottom}
        onPress={() =>{navigation.navigate('Explore',
        {username: username,
        navigation: navigation})}}>
        <Image 
          style={styles.globe}
          source={require('./globe.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{navigation.navigate('Explore',
      {username: username,
       navigation: navigation})}}>
        <Image
          style={styles.icon}
          source={require('./add.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom}>
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

  return (
    <View style={styles.top}>
      <TopBar/>
      <Separate/>
      <Middle/>
      <Separate/>
      <BottomBar/>
    </View>
  );
}

  const styles = StyleSheet.create({
    top: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },

    image: {
      marginTop: 50,
      marginBottom: 10,
      width: 70,
      height: 70,
    },

    middle: {
      flex: 5,
      width: '100%',
      backgroundColor: 'white',
      
    },

    middleText: {
      fontSize: 50,
      fontWeight: 'bold',
      justifyItems: 'center',
      alignItems: 'center',
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
  });
  