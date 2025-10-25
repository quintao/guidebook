import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Colors from '../constants/colors';
import React from 'react';
import { Image } from 'expo-image';

const Logo = require('@/assets/images/projectologo.png');
const Aititude = require('@/assets/images/aititude.png');
const RDDM = require('@/assets/images/rddm.jpg');
const twint = require('@/assets/images/twint.svg');

const handleRDDMPress = () => {
  Linking.openURL('https://regiondentsdumidi.ch');
};

const handleTwintPress = () => {
  Linking.openURL('https://www.twint.ch/your-payment-link');
};

export default function AboutScreen() {
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.section}>
        <View style={styles.logosRow}>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionTitle}>DEVELOPED BY</Text>              
              <View style={styles.imageWrapper}>
                <Image source={Aititude} style={styles.aititude} />
              </View>
            </View>

            <View style={styles.sectionItem}>
              <Text style={styles.sectionTitle}>SUPPORT</Text>                            
              <TouchableOpacity style={styles.imageWrapper} onPress={()=> { handleRDDMPress()}}>
                <Image source={RDDM} style={styles.rddm} />
              </TouchableOpacity>
            </View>
        </View>
      </View>

      <View style={styles.twintSection}>
        <Text style={styles.twintTitle}>CONTRIBUTE</Text>
        <TouchableOpacity style={styles.twintButton} onPress={() => { handleTwintPress()}}>
          <Image source={twint} style={styles.twintLogo} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.footerText}>© {new Date().getFullYear()} AI'TITUDE. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground || '#f8f8f8',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 90,
    borderColor: '#e0e0e0',
    borderWidth: 0,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    textAlign: "center"
  },
  logosRow: {
    flexDirection: 'row', // Arrange logos horizontally
    justifyContent: 'space-around', // Distribute space evenly
    width: '100%',
  },
  sectionItem: {
    flex: 1, // Allow items to take equal space
    marginHorizontal: 10, // Add some space between them
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    width: '100%', // Ensure it takes full width of its parent
  },
  aititude: {
    width: 120,
    height: 120,
    contentFit: "cover",
  },
  rddm: {
    width: 120, 
    height: 120, 
    contentFit: 'cover',
  },
  // New styles for Twint section
  twintSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20, // Add some top margin to separate from the previous section
  },
  twintTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  twintButton: {
    backgroundColor: '#ffffff',
    borderRadius: 15, // Slightly more rounded corners
    paddingVertical: 20,
    paddingHorizontal: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%', // Adjust width as needed
    maxWidth: 300, // Max width for larger screens
    marginBottom: 15,
    opacity: 0.8
  },
  twintLogo: {
    width: 120, // Increased size for the Twint logo
    height: 50,
    contentFit: 'contain',
  },
  twintScanText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  contributeText: {
    fontSize: 14,
    color: '#999',
    marginTop: 'auto',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    marginTop: 'auto',
    textAlign: 'center',
  },
});