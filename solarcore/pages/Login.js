import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (text) => {
    setUsername(text);
  };

  const handlePasswordInput = (text) => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    // Send username and password to server for authentication
    navigation.navigate('Profile', {name: username})
  };
  
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={require('./solarcore.png')} 
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameInput}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handlePasswordInput}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  image: {
    marginTop: 100,
    marginBottom: 50,
    width: 150,
    height: 150,
  },

  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#D19F3D',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#D19F3D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});