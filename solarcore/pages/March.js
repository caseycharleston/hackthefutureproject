import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function March({ navigation }) {
  
  return (
    <Text>
    March 2023 Competition{'\n'}
    Hosted by: Solarcore peeps!{'\n'}{'\n'}

    Ray breakdown -{'\n'}
    1st place: 1000 Rays{'\n'}
    2nd place: 500 Rays{'\n'}
    3rd place: 250 Rays{'\n'}
    Participation: 50 Rays{'\n'}
    Time: March 1st - March 31st{'\n'}{'\n'}
    Description: Earn the most rays to win the biggest prize! The theme for the month of March is sustainable commuting. Get to work on bike, bus, or even carpool and share it to your core!
    </Text>
  );
}

const styles = StyleSheet.create({

});