import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Link} from 'expo-router';
import Colors from '../constants/colors';
import { useState } from 'react';
import ShowSectorInfo from '../components/modal';
import Sectors from '../sectors';
import React from 'react';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MapView, { Marker} from 'react-native-maps';

const initialRegion = {
  latitude: 46.180007, // Initial latitude
  longitude: 6.873464, // Initial longitude
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

function getCoordinatesFromSectorData(sectorData: any) {
  return { 
    latitude: sectorData.overview?.latitude,
    longitude: sectorData.overview?.longitude
  };
};


function buildKey(latlong: any) {
  return latlong.latitude + "@" + latlong.longitude
}

function buildLatLongKeysMap() {
  let mapping = {}
  for (const sectorName in Sectors) {
    if (Sectors.hasOwnProperty(sectorName)) {
      const sectorData = Sectors[sectorName];
      const coordinates = getCoordinatesFromSectorData(sectorData)
      const key = buildKey(coordinates)
      mapping[key] = sectorData;
    }
  }
  return mapping
}


export default function Index() {
  const [showModal, setShowModal] = useState(false)
  const [targetSector, setTargetSector] = useState(Object)

  // TOOD(quintao): follow the Google API key setup as described here:
  // https://docs.expo.dev/versions/latest/sdk/map-view/
  function renderSectorLocations() {
    const mapping = buildLatLongKeysMap()
    return (
      <MapView style={styles.map} region={initialRegion}>
        {Sectors.map((sectorData) => {
          return (
            <Marker 
              key={sectorData.overview.name} 
              coordinate={getCoordinatesFromSectorData(sectorData)}
              title={sectorData.overview?.name}
              showsBuildings={false}
              pinColor={Colors.secondaryColorViolette}
              onPress={e => {
                const key = buildKey(e.nativeEvent.coordinate)
                cleanModalState();
                setTargetSector(mapping[key]);
                setShowModal(true);
              }}
              id={sectorData.overview.name}
            />
          );
        })}
      </MapView>
    );

  }

  function cleanModalState() {
    setShowModal(false)
    setTargetSector({})
  }
  
  function renderSectorShortInfo(targetSector: any) {
    return(
      <View style={styles.modalContent}>
        <View style={styles.modalShortDescription}>
          <Text style={{textAlign: 'center', color: Colors.text}}>{targetSector?.overview?.short_description}</Text>
        </View>
        <View style={styles.modalIconInfoContainer}>
          <View style={styles.modalIconInfo}>
            <Foundation name="mountains" size={40} color={Colors.text} style={{textAlign: 'center'}}/>
            <Text style={{textAlign: 'center', color: Colors.text}}>{targetSector?.overview?.altitude}</Text>
          </View>
          <View style={styles.modalIconInfo}>
            <Ionicons name="compass-outline" size={40} color={Colors.text} />
            <Text style={{textAlign: 'center', color: Colors.text}}>{targetSector?.overview?.orientation}</Text>
          </View>
          <View style={styles.modalIconInfo}>
            <FontAwesome name="hand-rock-o" size={40} color={Colors.text} />
            <Text style={{textAlign: 'center', color: Colors.text}}>{targetSector?.overview?.rock}</Text>
          </View>
          <View style={styles.modalIconInfo}>
            <Ionicons name="scale-outline" size={40} color={Colors.text} />
            <Text style={{textAlign: 'center', color: Colors.text}}>{targetSector?.overview?.grades}</Text>
          </View>          
        </View>

        <Link onPress={() => cleanModalState()}
          style={styles.modalLinkButton}   
          href={{
            pathname: "/sector",
            params: { target_sector: JSON.stringify(targetSector)}
          }}>
          <View style={styles.modalLink}>
              <Text style={styles.linkToModalText}>
                Visiter le secteur
              </Text>
          </View>
        </Link>        
      </View>
    )
  }

  return (
    <View style={styles.container}>
      { renderSectorLocations() }

      <ShowSectorInfo
          name={targetSector?.overview?.name}
          isVisible={showModal}
          onClose={() => cleanModalState()}>
        { renderSectorShortInfo({...targetSector}) }
      </ShowSectorInfo>
    </View> 
  );
}

const styles = StyleSheet.create({
  modalContent: {
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
   modalLinkButton: {
    borderRadius: 12, // Slightly increased border radius for a softer look
    marginTop: 25,
    // Shadow properties for iOS
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      // Shadow properties for Android
      android: {
        elevation: 8, // Adjust elevation for a stronger/weaker shadow
      },
    }),
  },
  modalLink: {
    borderRadius: 12, // Match the button's border radius
    backgroundColor: Colors.mainColorGreen,
    overflow: 'hidden', // Essential to clip the shadow within the button on iOS
  },
  linkToModalText: {
    paddingVertical: 18, // Slightly reduced padding for a more compact button
    paddingHorizontal: 25, // Added horizontal padding
    color: Colors.textInsideButton,
    fontWeight: 'bold', // Use string for fontWeight
    fontSize: 16, // Slightly increased font size for better readability
    textAlign: 'center', // Center the text within the button
  },
  modalShortDescription: {
    marginVertical: 10
  },
  modalIconInfo: {
    flexDirection: 'column',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    textAlign: 'center',
    margin: 10
  },
  modalIconInfoContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-evenly'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    alignItems: 'flex-start',
  },
  text: {
    color: Colors.text,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
