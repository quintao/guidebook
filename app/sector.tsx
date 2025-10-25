import { Text, View, StyleSheet, TouchableOpacity, Platform , ScrollView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';

import Colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useState } from 'react';
import { DataTable } from 'react-native-paper';

import Markdown from 'react-native-markdown-display';
import ImageView from "react-native-image-viewing";
import ResolveImage from "./components/image_resolver";

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

  // For topo imagessetZoomImage
  const [zoomImage, setZoomImage] = useState(-1)
  const [showZoom, setShowZoom] = useState(false)
  const [imageList, setImageList] = useState([])
  const [imageMetadataList, setImageMetadatList] = useState([])

  // For more info about one route.
  const [moreInfoIndex, setMoreInfoIndex] = useState(-1)

  function renderSection(title: string, content: string, iconName: string, controlVariable: boolean, setControlVariable: any) {
    if (content == "") {
      return (<></>)
    }

    return(
      <View style={styles.sectionContent}>
        <TouchableOpacity style={styles.sectionTitle} onPress={()=> {setControlVariable(!controlVariable)}}>
          <View style={styles.sectionIconAndText}>
            <View style={styles.iconSectionContainer}>
              <Ionicons name={iconName} size={25} color={Colors.clickableIcons} />
            </View>
            <Text style={styles.textSectionTitle}>{title}</Text>
          </View>
          <Ionicons name="chevron-expand-outline" size={20} color="black" />
        </TouchableOpacity>
        {controlVariable && <View style={{flexDirection: 'column'}}><Markdown style={{body: {color: Colors.text}}}>{content}</Markdown></View>}
      </View>
    )
  }
  

  function renderRestaurants(sector: any) {
    return renderSection("Restaurants", sector?.detailed_info?.restaurants, "pizza", showRestaurants, setShowRestaurants)
  }


  function renderAccess(sector: any) {
    return renderSection("Access", sector?.detailed_info?.access, "locate", showAccess, setShowAccess)
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
        <View style={styles.nameAndParkingContainer}>
          <Text style={styles.titleText}>{sector?.overview?.name}</Text>
          {renderParkingIcon(sector)}
        </View>
          <Text style={styles.subTitleText}>{sector?.overview?.short_description}</Text>
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


  const CustomFooter = ({ imageIndex }) => {
    const metadata = imageMetadataList[imageIndex]
    const numImages = imageMetadataList.length
    const imagesLabel = (imageIndex + 1) + " / " + numImages
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 30}}>
          <Text style={{marginTop: 20, color:'white'}}>{metadata.description}</Text>
          {numImages > 1 && <Text style={{marginBottom: 30, color:'white'}}>{imagesLabel}</Text> }
        </View>
    );
  };

  function renderOneTopoImage(image_data: any, index, sector: any) {
    let image_list = []
    for (const image of sector.sector_pictures) {
      const img = ResolveImage(image)
      image_list.push(img)
    }
    return(
      <View style={styles.topoImageContainer}>
        <TouchableOpacity style={styles.topoImagePanel}
          onPress={() => {
            setZoomImage(index);
            setShowZoom(true);
            setImageList(image_list);
            setImageMetadatList(sector.sector_pictures)
          }}
        >
          <View style={styles.imageOffsetBackground}/>
          <View style={styles.imageWrapper}>
            <Image
              source={image_data.path}
              style={styles.oneImageTopo}
              contentFit='cover'
            />
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
              {renderOneTopoImage(picture, index, sector)}
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
          size={15} 
          color="#bd971c" 
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
      return <></>
    }
    return (
      <TouchableOpacity  style={{padding: 10}}
        onPress={() => {
          let images = []
          for (const image of route?.pictures) {
            images.push(ResolveImage(image))
          }
          setZoomImage(0)
          setShowZoom(true);
          setImageList(images)
          setImageMetadatList(route.pictures)
        }}>
        <Text>
          <FontAwesome 
            name="photo" 
            size={20} 
            color="#a46aad" 
            style={styles.star} 
          />
        </Text>
      </TouchableOpacity>
    )
  }

  function renderRouteExtraInfo(route: any, index: number) {
    const mustShowPlus = (route?.tips != undefined && route?.tips != "" ) ||
                         (route?.requiped != undefined && route?.requiped != "") ||
                         (route?.setter != undefined && route?.setter != "")

    if (mustShowPlus == false) {
      return <></>
    }
  
    return (
      <TouchableOpacity style={{padding: 10}}
        onPress={() => {
          if (moreInfoIndex == index) {
            setMoreInfoIndex(-1)
          } else {
            setMoreInfoIndex(index)
          }
        }}>
        <Text>
          <FontAwesome 
            name={moreInfoIndex == index ? "minus-circle" : "plus-circle" }
            size={20} 
            color={moreInfoIndex == index ? "#f26f6f": Colors.mainColorGreen} 
            style={styles.star} 
          />
        </Text>
      </TouchableOpacity>
    )
  }
   
  function renderNoExtraInfo(route: any) {
    const has_extra = (route?.tips != undefined && route?.tips != "" ) ||
                         (route?.requiped != undefined && route?.requiped != "") ||
                         (route?.setter != undefined && route?.setter != "")
    const has_image = route?.pictures?.length > 0
    if (has_extra == false && has_image == false) {
      return <Text>-</Text>
    } else {
      return <></>
    }
  }


  function renderRoutePlusInformation(route: any, index: number) {
    return (
    <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
      { renderNoExtraInfo(route) }
      { renderRouteExtraInfo(route, index) }
      { renderRouteImage(route) }
    </View>)
  }


  function renderMoreInfoRoute(route: any) {
    return (
    <View style={styles.moreInfoRouteContainer}>
      {route?.tips &&
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text>Tip: </Text>
          <Text>{route.tips}</Text>
        </View>
      }

      {route?.requiped &&
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text>Reequipment: </Text>
          <Text>{route.requiped}</Text>
        </View>
      }

      {route?.setter &&
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text>Ouverte par: </Text>
          <Text>{route.setter}</Text>
        </View>
      }  

    </View>
    )
  }

  function renderOneRoute(route: any, index: number) {
    return (
      <View>
      <DataTable.Row  style={{justifyContent: 'center'}}>
        <DataTable.Cell style={{flex: 0.4, justifyContent: 'flex-start'}}><Text style={{fontSize: 12}}>{index + 1}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontSize: 12}}>{route?.name}</Text></DataTable.Cell>
        <DataTable.Cell style={{justifyContent: 'center'}}><Text style={{fontSize: 12}}>{route?.grade}</Text></DataTable.Cell>
        <DataTable.Cell style={{justifyContent: 'center'}}><StarRating rating={route?.stars}/></DataTable.Cell>
        <DataTable.Cell style={{justifyContent: 'center'}}>{ renderRoutePlusInformation(route, index)}</DataTable.Cell>
      </DataTable.Row>
        { moreInfoIndex == index &&
          <DataTable.Row  style={{justifyContent: "center"}}>
            <DataTable.Cell>
             { renderMoreInfoRoute(route) }
            </DataTable.Cell>
          </DataTable.Row>
        }
      </View>    
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
            <DataTable.Title style={{flex: 0.4, justifyContent: 'flex-start'}}><Text style={styles.tableTitleText}>#</Text></DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}><Text style={styles.tableTitleText}>Nom</Text></DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}><Text style={styles.tableTitleText}>Cotation</Text></DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}><Text style={styles.tableTitleText}>Interet</Text></DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}><Text style={styles.tableTitleText}>Plus d'info</Text></DataTable.Title>
          </DataTable.Header>
          
          {sector.routes.map((route: any, index: number) => (
            <View key={index}>
              {renderOneRoute(route, index)}
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
        <View style={{marginBottom: 100}}><Text></Text></View>
      </ScrollView>
    )
  }

  function cleanZoomState() {
    setShowZoom(false)
    setZoomImage(-1)
    setImageList([])
    setImageMetadatList([])
  }

  return (
    <View style={styles.screen}>
      { renderReturn() }
      <View style={styles.container}>
        { renderSector(sector) }
      </View>

      <ImageView
        images={imageList}
        imageIndex={zoomImage}
        visible={showZoom}
        FooterComponent={CustomFooter}
        onRequestClose={() => cleanZoomState()}
      />

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
    backgroundColor: Colors.tertiaryColorNeutral,
    borderColor: Colors.mainColorGreen,
    borderRadius: 20,
    padding: 5,
  },
  nameAndParkingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 40
  },
  titleText: {
    paddingHorizontal: 10,
    fontWeight: 600,
    fontSize: 20,
    color: "#464342ff"
  },
  subTitleText: {
    paddingHorizontal: 10,
    marginVertical: 10,
    fontStyle: 'italic',
    color: "#52504f"
  },
  sectionTitle: {
    flexDirection: 'row',
    backgroundColor: Colors.mainColorGreenWithOpacity,
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  sectionIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSectionContainer: {
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSectionTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: "white",
    marginLeft: 10
  }, 
  sectionContent: {
    marginTop: 20,
    fontSize: 20
  },
  mapPinContainer: {
    margin: 10,
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
    padding: 5,
    margin: 5,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
  },  
  oneImageTopo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
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
    paddingHorizontal: 10,
  },
  topoImageDescription: {
    fontSize: 9,
    textAlign: 'center',
    fontStyle: "italic"
  },
  zoomContainer: {
    backgroundColor: '#161716',
    opacity: 0.95,
    borderRadius: 5,
    alignItems: 'center',
  },
  routesContainer: {
    marginTop: 20,
  },
  moreInfoRouteContainer: {
    backgroundColor: '#e1e2e3',
    padding: 15,
    margin: 20,
    borderRadius: 20,
  },
  routesTitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 10    
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
    backgroundColor: Colors.tertiaryColorNeutral,
    borderRadius: 10
  },
  tableTitleText: {
    color: Colors.text,
    fontWeight: 800,
    fontSize: 13
  },  
});
