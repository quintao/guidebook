import { Text, View, StyleSheet, TouchableOpacity, Platform , ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';

import Colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import React, { useState } from 'react';
import ShowZoomImage from './components/zoom';
import ShowMoreInfoRoute from './components/moreinfo';
import { DataTable } from 'react-native-paper';


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

  // For topo images
  const [zoomImage, setZoomImage] = useState({})
  const [showZoom, setShowZoom] = useState(false)

  // For more info about one route.
  const [moreInfoRoute, setMoreInfoRoute] = useState({})
  const [showMoreInfoRoute, setShowMoreInfoRoute] = useState(false)

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
        <View>
          <Image
            source={image_data.path}
            style={{width: 150, height: 150, borderRadius: 20 }}
            contentFit='scale-down'
          />
          <View style={{
            position: 'absolute',
            top: 20,
            left: 120,
          }}>
              <MaterialIcons name="zoom-in" size={32} color="grey" />
          </View>          
        </View>
          <Text style={styles.topoImageDescription}>{image_data.description}</Text>
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

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(
        <MaterialIcons 
          key={i} 
          name={i < rating ? 'star' : 'star-outline'} 
          size={20} 
          color="gold" 
          style={styles.star} 
        />
      );
    }
  
    return (
      <View style={styles.starContainer}>
        <Text>{stars}</Text>
      </View>
    );
  };

  function renderRouteImage(route: any) {
    const mustShowPlus = route?.pictures?.length > 0

    if (mustShowPlus == false) {
      return <Text>-</Text>
    }
    return (
      <TouchableOpacity  style={{padding: 10}}
        onPress={() => {
          setZoomImage(route?.pictures[0])
          setShowZoom(true);
        }}>
        <Text>
          <FontAwesome 
            name="photo" 
            size={20} 
            color="#523b50" 
            style={styles.star} 
          />
        </Text>
      </TouchableOpacity>
    )
  }

  function renderRouteExtraInfo(route: any) {
    const mustShowPlus = (route?.tips != undefined && route?.tips != "" ) ||
                         (route?.requiped != undefined && route?.requiped != "") ||
                         (route?.setter != undefined && route?.setter != "")

    if (mustShowPlus == false) {
      return <Text>-</Text>
    }
    return (
      <TouchableOpacity style={{padding: 10}}
        onPress={() => {
          setMoreInfoRoute(route);
          setShowMoreInfoRoute(true);
        }}>
        <Text>
          <FontAwesome 
            name="plus-circle" 
            size={20} 
            color="green" 
            style={styles.star} 
          />
        </Text>
      </TouchableOpacity>
    )
  }

  function renderRoutePlusInformation(route: any) {
    return (
    <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
      { renderRouteExtraInfo(route) }
      { renderRouteImage(route) }
    </View>)
  }

  function renderOneRoute(route: any) {
    return (
    <DataTable.Row>
      <DataTable.Cell><Text>{route?.name}</Text></DataTable.Cell>
      <DataTable.Cell style={{justifyContent: 'center'}}><Text>{route?.grade}</Text></DataTable.Cell>
      <DataTable.Cell style={{justifyContent: 'center'}}><StarRating rating={route?.stars}/></DataTable.Cell>
      § <DataTable.Cell style={{justifyContent: 'center'}}>{ renderRoutePlusInformation(route)}</DataTable.Cell>
    </DataTable.Row>
    )
  }
  
  function renderRoutes(sector: any) {
    if (sector?.routes.length == 0) {
      return (<></>)
    }

    return (
      <View style={styles.routesContainer}>
        <Text style={styles.routesTitle}>Les voies</Text>
        <DataTable style={styles.tableContainer}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title style={{justifyContent: 'center'}}><Text>Nom</Text></DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}><Text>Cotation</Text></DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}><Text>Interet</Text></DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}><Text>Plus d'info</Text></DataTable.Title>
          </DataTable.Header>
          
          {sector.routes.map((route: any, index: number) => (
            <View key={index}>
              {renderOneRoute(route)}
            </View>
          ))}

          </DataTable>
      </View>
    )
  }

  function renderSector(sector: any) {
    return(
      <ScrollView style={styles.sectorContainer}>
        {renderGeneralInfo(sector)}
        {renderTopo(sector)}
        {renderRoutes(sector)}
      </ScrollView>
    )
  }

  function cleanZoomState() {
    setShowZoom(false)
    setZoomImage({})
  }

  function cleanMoreInfoRouteState() {
    setShowMoreInfoRoute(false)
    setMoreInfoRoute({})
  } 

  function renderZoomImage() {
    if (zoomImage?.path == null) {
      return <></>
    }
    return (
    <View style={styles.zoomContainer}>
      <Text style={{marginTop: 20, color:'white'}}>{zoomImage?.description}</Text>
       <Image
          source={zoomImage.path} style={{width: "90%", height: "80%", borderRadius: 10 }}
          contentFit='contain'/>
        <TouchableOpacity
          onPress={() => cleanZoomState()}
          style={{padding: 8, marginBottom: 20, borderColor: 'white',  borderWidth: 1,  borderRadius: 10}}>
            <Text style={{color: 'white'}}>Fermer</Text>
        </TouchableOpacity>
    </View>
    )
  }

  function renderMoreInfoRoute() {
    const route = moreInfoRoute;

    return (
    <View style={styles.moreInfoRouteContainer}>
      {route?.tips &&
        <View style={{flexDirection: 'row'}}>
          <Text>Tip: </Text>
          <Text>{route.tips}</Text>
        </View>
      }

      {route?.requiped &&
        <View style={{flexDirection: 'row'}}>
          <Text>Reequipment: </Text>
          <Text>{route.requiped}</Text>
        </View>
      }

      {route?.setter &&
        <View style={{flexDirection: 'row'}}>
          <Text>Ouverte par: </Text>
          <Text>{route.setter}</Text>
        </View>
      }  

    </View>
    )
  }

  return (
    <View style={styles.screen}>
      { renderReturn() }
      <View style={styles.container}>
        { renderSector(sector) }
      </View>

        <ShowZoomImage
          isVisible={showZoom}>
          { renderZoomImage() }
        </ShowZoomImage>

        <ShowMoreInfoRoute
         name={moreInfoRoute?.name}
         isVisible={showMoreInfoRoute}
         onClose={() => cleanMoreInfoRouteState()}>
          { renderMoreInfoRoute() }
         </ShowMoreInfoRoute>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.appBackground,
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
    marginTop: Platform.OS == "android" ? 50 : 50,
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
    maxWidth: 380,
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
    alignItems: 'center'
  },
  topoImagePanel: {
    padding: 20,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 0.8
  },
  topoImagesPanel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center'
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
    backgroundColor: '#161716',
    opacity: 0.95,
    alignItems: 'center',
  },
  routesContainer: {
    marginTop: 20,
  },
  moreInfoRouteContainer: {
    backgroundColor: "#e1e2e3",
    padding: 20,
  },
  routesTitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 10,    
  },
  routesPanelContainer: {
    flexDirection: 'column'
  },
  oneRouteContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  oneRouteName: {
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 2,
  },
  tableContainer: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
