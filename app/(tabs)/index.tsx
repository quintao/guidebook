import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useRouter, Link} from 'expo-router';
import Colors from '../constants/colors';
import { useState } from 'react';
import ShowSectorInfo from '../components/modal';
import Sectors from '../sectors';
import React from 'react';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ValleyImage = require('@/assets/images/handmap.png');
const DentsDuMidiImage = require('@/assets/images/mountains.png');

export default function Index() {
  const [showModal, setShowModal] = useState(false)
  const [targetSector, setTargetSector] = useState(Object)
  const router = useRouter();

  function renderBubbles(key: string, sector: any) {
    return(
      <TouchableOpacity
        key={key}
        style={{
          position: 'absolute',
          top: sector.top,
          left: sector.left,
          opacity: 0.5,
          borderBottomColor: sector.color,
          ...styles.triangle
        }}
        onPress={() => {
          cleanModalState()
          setShowModal(true);
          setTargetSector(sector);
        }}        
    >
      <View style={{
          top: -15,
          left: -30,
          width: 60, height: 60
      }}/>
    </TouchableOpacity>
    ) 
  }

  function renderWelcome() {
    return(
      <View
        style={{
          alignSelf: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 650,
          left: 180,
          borderRadius: 20,
          backgroundColor: 'white',
          opacity: 0.5,
          padding: 10,
          flexWrap: 'wrap'
        }}
    >
      <Text style={{maxWidth: 200}}>Bienvenue ! Appuyez sur un secteur pour commencer</Text>
    </View>
    ) 
  }  

  function cleanModalState() {
    setShowModal(false)
    setTargetSector({})
  }
  
  function renderSectorShortInfo() {
    const sector = {...targetSector}
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

        <View style={{backgroundColor: sector?.color, ...styles.modalLink}}>
          <Link onPress={() => cleanModalState()}    
          href={{
            pathname: "/sector",
            params: { target_sector: JSON.stringify(sector)}
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
      <View style={styles.imageContainer}>
        <Image source={ValleyImage} style={styles.image} />
        {
          Object.keys(Sectors).map((key) => (
            renderBubbles(key, Sectors[key])
          ))
        }
        { renderWelcome() }
      </View>

      <ShowSectorInfo
          name={targetSector?.overview?.name}
          color={targetSector?.color}
          isVisible={showModal}
          onClose={() => cleanModalState()}>
        { renderSectorShortInfo() }
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
    opacity: 0.6
  },
  linkToModalText: {
    color: 'white',
    fontWeight: 500
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
  imageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appBackground,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    opacity: 0.5,
    alignItems: 'flex-start',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 16,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
});
