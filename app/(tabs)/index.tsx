import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
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
              onPress={e => {
                const key = buildKey(e.nativeEvent.coordinate)
                cleanModalState()
                setShowModal(true);
                setTargetSector(mapping[key]);                
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
          <Text>{targetSector?.overview?.short_description}</Text>
        </View>
        <View style={styles.modalIconInfoContainer}>
          <View style={styles.modalIconInfo}>
            <Foundation name="mountains" size={24} color="black" style={{textAlign: 'center'}}/>
            <Text style={{textAlign: 'center'}}>{targetSector?.overview?.altitude}</Text>
          </View>
          <View style={styles.modalIconInfo}>
            <Ionicons name="compass-outline" size={24} color="black" />
            <Text style={{textAlign: 'center'}}>{targetSector?.overview?.orientation}</Text>
          </View>
          <View style={styles.modalIconInfo}>
            <FontAwesome name="hand-rock-o" size={24} color="black" />
            <Text style={{textAlign: 'center'}}>{targetSector?.overview?.rock}</Text>
          </View>
          <View style={styles.modalIconInfo}>
            <Ionicons name="scale-outline" size={24} color="black" />
            <Text style={{textAlign: 'center'}}>{targetSector?.overview?.grades}</Text>
          </View>          
        </View>

        <View style={styles.modalLink}>
          <Link onPress={() => cleanModalState()}    
          href={{
            pathname: "/sector",
            params: { target_sector: JSON.stringify(targetSector)}
          }}>
            <Text style={styles.linkToModalText}>
              Visiter le secteur
            </Text>
          </Link>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalLink: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    opacity: 1.0,
    backgroundColor: 'green',
  },
  linkToModalText: {
    padding: 20,
    color: 'white',
    fontWeight: 800
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
    borderWidth: 2,
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
