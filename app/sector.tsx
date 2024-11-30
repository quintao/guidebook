import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';

import Colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';

const mapsLogo = require('@/assets/images/maps.png');


function renderReturn() {
  return(
    <View style={styles.returnContainer}>
      <Link href="/" style={styles.button}>
        <View style={styles.returnLine}>
        <Ionicons name="arrow-back" size={32} color="grey" />
          <Text style={styles.returnLabel}>Retour</Text>
        </View>
      </Link>
    </View>
  )
}


export default function SectorScreen() {
  const params = useLocalSearchParams();
  const {target_sector} = params;
  const sector = JSON.parse(target_sector.toString());

  const [showDescription, setShowDescription] = useState(false)
  const [showAccess, setShowAccess] = useState(false)
  const [showRestaurants, setShowRestaurants] = useState(false)


  function renderSection(title: string, content: string, iconName: string, controlVariable: boolean, setControlVariable: any) {
    if (content == "") {
      return (<></>)
    }

    return(
      <View style={styles.sectionContent}>
        <TouchableOpacity style={styles.sectionTitle} onPress={()=> {setControlVariable(!controlVariable)}}>
          <View style={styles.sectionIconAndText}>
            <View style={styles.iconSectionContainer}>
              <Ionicons name={iconName} size={20} color="black" />
            </View>
            <Text>{title}</Text>
          </View>
          <Ionicons name="chevron-expand-outline" size={20} color="black" />
        </TouchableOpacity>
        {controlVariable && <View style={{flexDirection: 'column'}}><Text style={styles.sectionExpandableText}>{content}</Text></View>}
      </View>
    )
  }
  

  function renderRestaurants(sector: any) {
    return renderSection("Restaurants", sector?.detailed_info?.restaurants, "fast-food-sharp", showRestaurants, setShowRestaurants)
  }


  function renderAccess(sector: any) {
    return renderSection("Access", sector?.detailed_info?.access, "globe-sharp", showAccess, setShowAccess)
  }
  
  const renderBox = (color: string, opacity: number, value: string, category: string) => {
    return(
      <View style={{...styles.box, backgroundColor: color, opacity: opacity}}>
        <Text style={styles.detailBoxValue}>{value}</Text>
        <Text>{category}</Text>
      </View>
      )   
    }

  function renderDetails(sector: any) {
    return (
      <View style={styles.detailsContainer}>
        {renderBox("#0097b2", 0.6, sector?.overview?.altitude , "altitude")}
        {renderBox("#0097b2", 0.6, sector?.overview?.orientation , "orientation")}
        {renderBox("#0097b2", 0.6, sector?.overview?.rock , "rocher")}
      </View>
    )

  }

  function renderParkingIcon(sector: any) {
    return (
      <View style={styles.mapPinContainer}>
          <Link href={sector?.detailed_info?.parking}>
              {/* <FontAwesome name="map-marker" size={30} color="red" /> */}
              <Image source={mapsLogo} style={styles.mapsLogoContainer} />

          </Link>
      </View>
    );
  }
  

  function renderSectorNameAndParking(sector: any) {
    return(
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{sector?.overview?.name}</Text>
        {renderParkingIcon(sector)}
      </View>
    )
  }
 

  function renderDescription(sector: any) {
    return renderSection(
      "Description", sector?.detailed_info?.long_description, "menu", showDescription, setShowDescription
    )
  }

  function renderGeneralInfo(sector: any) {
    return(
      <View style={styles.generalInfoContainer}>
          { renderSectorNameAndParking(sector) }
          { renderDetails(sector) }
          { renderDescription(sector) }

          { renderAccess(sector)}
  
          { renderRestaurants(sector) }
      </View>
    )
  }
  
  function renderRoutes(sector: any) {
    return(
      <View style={styles.generalInfoContainer}>
        <Text>Routes go here</Text>
      </View>
    )
  }

  function renderSector(sector: any) {
    return(
      <View style={styles.sectorContainer}>
        {renderGeneralInfo(sector)}
        {renderRoutes(sector)}
      </View>
    )
  }


  return (
    <View style={styles.screen}>
      { renderReturn() }
      <View style={styles.container}>
        { renderSector(sector) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.appBackground,
  },
  container: {
    margin: 5,
    backgroundColor: Colors.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.text,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: Colors.link,
  },
  returnContainer: {
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  returnLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  returnLabel: {
    paddingLeft: 10,
  },
  sectorContainer: {

  },
  generalInfoContainer: {

  },
  mapsLogoContainer: {
      width: 20,
      height: 25,
      borderRadius: 10,
  },
  detailsContainer: {
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#f0eeed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: '28%', // Adjust width as needed
    aspectRatio: 1, // Keep boxes square
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 5,
    borderRadius: 20,
    padding: 10,
  },
  detailBoxValue: {
    fontWeight: 800,
  },
  titleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,    
  },
  titleText: {
    padding: 10,
    fontWeight: 600,
    fontSize: 20
  },
  sectionTitle: {
    flexDirection: 'row',
    backgroundColor: "#e1e2e3",
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  sectionIconAndText: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  iconSectionContainer: {
    marginHorizontal: 3
  },
  sectionContent: {
    marginTop: 20,
    fontSize: 20
  },
  sectionText: {
    fontSize: 15
  },
  sectionExpandableText: {
    fontSize: 13,
    padding: 5,
    maxWidth: 360,
    fontFamily: 'roboto'
  },
  mapPinContainer: {
    marginRight: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'white'
  },
});
