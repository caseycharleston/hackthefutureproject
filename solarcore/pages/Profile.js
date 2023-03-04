import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'

export default function Profile({username, navigation, icon}) {
    const TopBar = () => {
    return (
      <View> 
        <Image
          style={styles.image}
          source={require('./earth.png')}
       />
      </View>
    );
  };

  const Middle = () => {
    return (
      <View style={styles.middle}>
        <ScrollView horizontal={true}>
        </ScrollView>
      </View>
    );
  };

  const BottomBar = () => {
    return (
      <View style={styles.bottom}>
        <Image 
          style={styles.globe}
          source={require('./globe.png')}
        />
        <Image
          style={styles.icon}
          source={require('./add.png')}
        />
        <Image
          style={styles.icon}
          source={require('./profile.png')}
        />
      </View>
    );
  };

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
      <Text>{username}</Text>
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
      marginTop: 20,
      marginBottom: 10,
      width: 100,
      height: 100,
    },

    middle: {
      flex: 5,
      width: '100%',
      backgroundColor: 'white',
      
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
  