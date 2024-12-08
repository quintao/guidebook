import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';

import Colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from 'react';
import ShowZoomImage from './components/zoom';


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
  const [zoomImage, setZoomImage] = useState({})
  const [showZoom, setShowZoom] = useState(false)

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
  
  
  function renderParkingIcon(sector: any) {
    var url = sector?.detailed_info?.parking[Platform.OS]
    if (url == "") { return <></>}

    return (
      <View style={styles.mapPinContainer}>
          <Link href={url}>
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
          { renderDescription(sector) }

          { renderAccess(sector)}
  
          { renderRestaurants(sector) }
      </View>
    )
  }

  function renderOneTopoImage(image_data: any) {
    return(
      <View style={styles.topoImageContainer}>
        <TouchableOpacity style={styles.topoImagePanel}
          onPress={() => {
            setZoomImage(image_data);
            setShowZoom(true);
          }}
        >
          <Image source={image_data.path} style={{width: 150, height: 150, borderRadius: 20 }} />
          <Text style={styles.topoImageDescription}>{image_data.description}</Text>
          <View style={{
            position: 'absolute',
            top: 20,
            left: 130,
          }}>
              <MaterialIcons name="zoom-in" size={32} color="grey" />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  function renderTopo(sector: any) {
    if (sector?.sector_pictures.length == 0) {
      return (<></>)
    }
    return (
      <View style={styles.topoContainer}>
        <Text style={styles.topoTitle}>Le topo</Text>
        <View style={styles.topoImagesPanel}>
          {sector.sector_pictures.map((picture: any, index: number) => (
            <View key={index}>
              {renderOneTopoImage(picture)}
            </View>
           ))}
        </View>
      </View>
    )

  }
  
  function renderRoutes(sector: any) {
    return(
      <View style={styles.generalInfoContainer}>
      </View>
    )
  }

  function renderSector(sector: any) {
    return(
      <View style={styles.sectorContainer}>
        {renderGeneralInfo(sector)}
        {renderTopo(sector)}
        {renderRoutes(sector)}
      </View>
    )
  }

  function cleanZoomState() {
    setShowZoom(false)
    setZoomImage({})
  }

  function renderZoomImage() {
    if (zoomImage?.path == null) {
      return <></>
    }
    return (<View style={styles.zoomContainer}>
      <Image
        source={zoomImage.path} style={{width: "95%", height: "95%", borderRadius: 20 }}
        contentFit='contain'
        />
    </View>)
  }


  return (
    <View style={styles.screen}>
      { renderReturn() }
      <View style={styles.container}>
        { renderSector(sector) }
      </View>

      <ShowZoomImage
          name={zoomImage?.description}
          isVisible={showZoom}
          onClose={() => cleanZoomState()}>
        { renderZoomImage() }
        </ShowZoomImage>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.appBackground,
    marginTop: Platform.OS == "android" ? 0 : 30,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.appBackground,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    width: "100%",
    padding: 10
  },
  generalInfoContainer: {
    flexDirection: 'column',
  },
  mapsLogoContainer: {
      width: 20,
      height: 25,
      borderRadius: 10,
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
  topoContainer: {
    marginTop: 20,
  },
  topoImageContainer: {
    flexDirection: 'column',
  },
  topoImagePanel: {
    padding: 20,
    borderRadius: 20,
  },
  topoImagesPanel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  topoTitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 10,
  },
  topoImageDescription: {
    fontSize: 12,
    textAlign: 'center'
  },
  zoomContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
