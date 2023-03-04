import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'

export default function Profile({username, navigation, icon}) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('./earth.png')}
      />
      <Text style={styles.top}>username</Text>
      <ScrollView horizontal={true} style={styles.middle}>
        <Text>experiment</Text>
      </ScrollView>
      <Text style={styles.bottom}>test</Text>
      
    </View>
   
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    

    image: {
      marginTop: 40,
      marginBottom: 2,
      width: 100,
      height: 100,
    },

    middle: {
      backgroundColor: 'white',
      marginTop: 20,
      marginBottom: 20,
    },

    bottom: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'bottom',
      marginBottom: 50,
    },
  });

