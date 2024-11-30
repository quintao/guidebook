import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Image } from 'expo-image';
import { useRouter, Link} from 'expo-router';
import Colors from '../constants/colors';
import { useState } from 'react';
import ShowSectorInfo from '../components/modal';
import Sectors from '../sectors';
import React from 'react';

const ValleyImage = require('@/assets/images/valley.png');
const DentsDuMidiImage = require('@/assets/images/mountains.png');


function renderTitle() {
  return (
    <View style={styles.welcomeTitleContainer}>
      <Image source={DentsDuMidiImage} style={styles.titleImage} />
      <View
        style={{
            position: 'absolute',
            top: 160,
            left: 280,
          }}
      >
        <Text style={styles.titleText}>ESCALADE VALLE D'ILLIEZ</Text>
      </View>
    </View>
  )
}

function renderWelcome() {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeSubText}>Vous pouvez parcourir ci-dessous les secteurs d'escalade de notre région.</Text>
    </View>
  )
}

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
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: sector.color,
          opacity: 0.5,
          padding: 10,
        }}
        onPress={() => {
          cleanModalState()
          setShowModal(true);
          setTargetSector(sector);
        }}
    >
    </TouchableOpacity>
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
        <Text>Altitude: {targetSector?.overview?.altitude}</Text>
        <Text>Orientation: {targetSector?.overview?.orientation}</Text>
        <Text>Rochè: {targetSector?.overview?.rock}</Text>
        <Text>
          Types d'escalade et style: {targetSector?.overview?.main_activities} - {targetSector?.overview?.style}
        </Text>

        <View style={styles.modalLink}>
          <Link onPress={() => cleanModalState()}    
          href={{
            pathname: "/sector",
            params: { target_sector: JSON.stringify(sector)}
          }}>
           Visiter le secteur
          </Link>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderTitle()}
      {renderWelcome()}
      <View style={styles.imageContainer}>
        <Image source={ValleyImage} style={styles.image} />
        {
          Object.keys(Sectors).map((key) => (
            renderBubbles(key, Sectors[key])
          ))
        }
      </View>

      <ShowSectorInfo
          name={targetSector?.overview?.name}
          isVisible={showModal}
          onClose={() => cleanModalState()}>
        { renderSectorShortInfo() }
      </ShowSectorInfo>
    </View> 
  );
}

const styles = StyleSheet.create({
  modalContent: {
    padding: 10
  },
  modalLink: {
    backgroundColor: 'red',
  },
  modalShortDescription: {
    marginVertical: 10
  },
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    alignItems: 'flex-start',
  },
  text: {
    color: Colors.text,
  },
  welcomeTitleContainer: {
   marginHorizontal: 5,
    // backgroundColor: Colors.mainColorGreen,
    borderRadius: 15,
    alignSelf: 'center'
  },
  titleImageContainer: {
    alignSelf:  'center',
    // flex: 1,
  },
  titleImage: {
    width: 420,
    height: 180,
    borderRadius: 10,
  }, 
  titleText: {
    fontSize: 10,
    fontWeight: 500,
    color: 'white',
    textAlign: 'right',
    fontFamily: 'roboto'
  },
  welcomeContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  welcomeSubText: {
    fontSize: 15,
    padding: 10,
    color: Colors.pageTitle,
    textAlign: 'center',
    fontFamily: 'roboto'    
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: Colors.link,
  },
  imageContainer: {
    alignSelf:  'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: "#F7F5F0",
    borderRadius: 20,
  },
  image: {
    width: 380,
    height: 420,
    borderRadius: 30,
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    opacity: 0.5,
    alignItems: 'flex-start',
  },
});
