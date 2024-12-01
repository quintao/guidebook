import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import React from 'react';

import { Image } from 'expo-image';

const Logo = require('@/assets/images/projectologo.png');
const Aititude = require('@/assets/images/aititude.png');
const RDDM = require('@/assets/images/rddm.png');



export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

    <View style={styles.developedByContainer}>
      <Text style={{fontWeight: 700}}>DEVELOPPE PAR</Text>
      <View>
        <Image source={Aititude} style={styles.aititude} />
      </View>
    </View>

    <View style={styles.developedByContainer}>
      <Text style={{fontWeight: 700}}>AVEC LE SUPPORT DE</Text>
      <View>
        <Image source={RDDM} style={styles.rddm} />
      </View>
    </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
    borderColor: '#e1e2e3',
    borderWidth: 2,
    borderRadius: 1000,
    padding: 30,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 18,
  },
  developedByContainer: {
    marginTop: 30,
  },
  aititude: {
    width: 120,
    height: 120,
  },
  rddm: {
    marginTop: 20,
    width: 240,
    height: 78,
  },
})