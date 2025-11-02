import { Text, View, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
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
  return (
    <View style={styles.returnContainer}>
      <Link href="/" style={styles.button}>
        <View style={styles.returnLine}>
          <Ionicons name="arrow-back" size={28} color={Colors.text} />
          <Text style={styles.returnLabel}>Retour</Text>
        </View>
      </Link>
    </View>
  )
}

export default function SectorScreen() {
  const params = useLocalSearchParams();
  const { target_sector } = params;
  const sector = JSON.parse(target_sector.toString());

  const [showDescription, setShowDescription] = useState(false)
  const [showAccess, setShowAccess] = useState(false)
  const [showRestaurants, setShowRestaurants] = useState(false)

  // For topo images
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

    return (
      <View style={styles.sectionContent}>
        <TouchableOpacity style={styles.sectionTitle} onPress={() => { setControlVariable(!controlVariable) }}>
          <View style={styles.sectionIconAndText}>
            <View style={styles.iconSectionContainer}>
              <Ionicons name={iconName} size={22} color={Colors.clickableIcons} />
            </View>
            <Text style={styles.textSectionTitle}>{title}</Text>
          </View>
          <Ionicons name={controlVariable ? "chevron-up" : "chevron-down"} size={20} color={Colors.clickableIcons} />
        </TouchableOpacity>
        {controlVariable && <View style={styles.sectionMarkdown}><Markdown style={{ body: { color: Colors.text, lineHeight: 20 } }}>{content}</Markdown></View>}
      </View>
    )
  }


  function renderRestaurants(sector: any) {
    return renderSection("Restaurants", sector?.detailed_info?.restaurants, "pizza", showRestaurants, setShowRestaurants)
  }


  function renderAccess(sector: any) {
    return renderSection("Access", sector?.detailed_info?.access, "location", showAccess, setShowAccess)
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
    return (
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
      "Description", sector?.detailed_info?.long_description, "document-text", showDescription, setShowDescription
    )
  }

  function renderGeneralInfo(sector: any) {
    return (
      <View style={styles.generalInfoContainer}>
        {renderSectorNameAndParking(sector)}
        {renderDescription(sector)}
        {renderAccess(sector)}
        {renderRestaurants(sector)}
      </View>
    )
  }


  const CustomFooter = ({ imageIndex }) => {
    const metadata = imageMetadataList[imageIndex]
    const numImages = imageMetadataList.length
    const imagesLabel = (imageIndex + 1) + " / " + numImages
    return (
      <View style={styles.imageViewerFooter}>
        <Text style={styles.imageViewerDescription}>{metadata.description}</Text>
        {numImages > 1 && <Text style={styles.imageViewerCount}>{imagesLabel}</Text>}
      </View>
    );
  };

  function renderOneTopoImage(image_data: any, index, sector: any) {
    let image_list = []
    for (const image of sector.sector_pictures) {
      const img = ResolveImage(image)
      image_list.push(img)
    }
    return (
      <View style={styles.topoImageContainer}>
        <TouchableOpacity style={styles.topoImagePanel}
          onPress={() => {
            setZoomImage(index);
            setShowZoom(true);
            setImageList(image_list);
            setImageMetadatList(sector.sector_pictures)
          }}
        >
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.topoImagesPanel}>
          {sector.sector_pictures.map((picture: any, index: number) => (
            <View key={index}>
              {renderOneTopoImage(picture, index, sector)}
            </View>
          ))}
        </ScrollView>
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
          size={16}
          color={Colors.starYellow}
          style={styles.star}
        />
      );
    }

    return (
      <View style={styles.starContainer}>
        {stars}
      </View>
    );
  };

  function renderRouteImage(route: any) {
    const mustShowPlus = route?.pictures?.length > 0

    if (mustShowPlus == false) {
      return <></>
    }
    return (
      <TouchableOpacity style={styles.routeActionButton}
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
        <FontAwesome
          name="photo"
          size={18}
          color={Colors.routeIcon}
        />
      </TouchableOpacity>
    )
  }

  function renderRouteExtraInfo(route: any, index: number) {
    const mustShowPlus = (route?.tips != undefined && route?.tips != "") ||
      (route?.requiped != undefined && route?.requiped != "") ||
      (route?.setter != undefined && route?.setter != "")

    if (mustShowPlus == false) {
      return <></>
    }

    return (
      <TouchableOpacity style={styles.routeActionButton}
        onPress={() => {
          if (moreInfoIndex == index) {
            setMoreInfoIndex(-1)
          } else {
            setMoreInfoIndex(index)
          }
        }}>
        <FontAwesome
          name={moreInfoIndex == index ? "chevron-up" : "chevron-down"}
          size={18}
          color={moreInfoIndex == index ? Colors.danger : Colors.primary}
        />
      </TouchableOpacity>
    )
  }

  function renderNoExtraInfo(route: any) {
    const has_extra = (route?.tips != undefined && route?.tips != "") ||
      (route?.requiped != undefined && route?.requiped != "") ||
      (route?.setter != undefined && route?.setter != "")
    const has_image = route?.pictures?.length > 0
    if (has_extra == false && has_image == false) {
      return <Text style={{ color: Colors.textMuted }}>-</Text>
    } else {
      return <></>
    }
  }


  function renderRoutePlusInformation(route: any, index: number) {
    return (
      <View style={styles.routeActionsContainer}>
        {renderNoExtraInfo(route)}
        {renderRouteExtraInfo(route, index)}
        {renderRouteImage(route)}
      </View>)
  }


  function renderMoreInfoRoute(route: any) {
    return (
      <View style={styles.moreInfoRouteContainer}>
        {route?.tips &&
          <View style={styles.moreInfoRow}>
            <Text style={styles.moreInfoLabel}>Tip: </Text>
            <Text style={styles.moreInfoText}>{route.tips}</Text>
          </View>
        }

        {route?.requiped &&
          <View style={styles.moreInfoRow}>
            <Text style={styles.moreInfoLabel}>Reequipment: </Text>
            <Text style={styles.moreInfoText}>{route.requiped}</Text>
          </View>
        }

        {route?.setter &&
          <View style={styles.moreInfoRow}>
            <Text style={styles.moreInfoLabel}>Ouverte par: </Text>
            <Text style={styles.moreInfoText}>{route.setter}</Text>
          </View>
        }

      </View>
    )
  }

  function renderOneRoute(route: any, index: number) {
    return (
      <View key={index}>
        <DataTable.Row style={styles.dataTableRow}>
          <DataTable.Cell style={styles.routeCellNumber}><Text style={styles.routeCellText}>{index + 1}</Text></DataTable.Cell>
          <DataTable.Cell style={styles.routeCellName}><Text style={styles.routeCellText}>{route?.name}</Text></DataTable.Cell>
          <DataTable.Cell style={styles.routeCellGrade}><Text style={styles.routeCellText}>{route?.grade}</Text></DataTable.Cell>
          <DataTable.Cell style={styles.routeCellStars}><StarRating rating={route?.stars} /></DataTable.Cell>
          <DataTable.Cell style={styles.routeCellActions}>{renderRoutePlusInformation(route, index)}</DataTable.Cell>
        </DataTable.Row>
        {moreInfoIndex == index &&
          <DataTable.Row style={styles.moreInfoRowContainer}>
            <DataTable.Cell style={styles.moreInfoCell}>
              {renderMoreInfoRoute(route)}
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
            <DataTable.Title textStyle={styles.tableTitleText} style={styles.tableColNumber}>#</DataTable.Title>
            <DataTable.Title textStyle={styles.tableTitleText} style={styles.tableColName}>Nom</DataTable.Title>
            <DataTable.Title textStyle={styles.tableTitleText} style={styles.tableColGrade}>Cotation</DataTable.Title>
            <DataTable.Title textStyle={styles.tableTitleText} style={styles.tableColInterest}>Interet</DataTable.Title>
            <DataTable.Title textStyle={styles.tableTitleText} style={styles.tableColInfo}>Info</DataTable.Title>
          </DataTable.Header>

          {sector.routes.map((route: any, index: number) => (
            renderOneRoute(route, index)
          ))}

        </DataTable>
      </View>
    )
  }

  function renderSector(sector: any) {
    return (
      <ScrollView style={styles.sectorContainer}>
        {renderGeneralInfo(sector)}
        {renderTopo(sector)}
        {renderRoutes(sector)}
        <View style={{ marginBottom: 100 }}><Text></Text></View>
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
      {renderReturn()}
      <View style={styles.container}>
        {renderSector(sector)}
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
    backgroundColor: Colors.appBackground,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.appBackground,
  },
  returnContainer: {
    paddingTop: Platform.OS === "android" ? 50 : 50,
    paddingLeft: 15,
    backgroundColor: Colors.appBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingBottom: 10,
  },
  returnLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnLabel: {
    paddingLeft: 10,
    fontSize: 16,
    color: Colors.text,
  },
  sectorContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  generalInfoContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    marginTop: 20,
    backgroundColor: Colors.tertiaryColorNeutral,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nameAndParkingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.headingText,
  },
  subTitleText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.textMuted,
    lineHeight: 22,
  },
  mapPinContainer: {
    margin: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  mapsLogoContainer: {
    width: 20,
    height: 25,
    borderRadius: 10
  },
  sectionContent: {
    marginTop: 15,
    backgroundColor: Colors.cardBackground,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden'
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.mainColorGreenWithOpacity,
  },
  sectionIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSectionContainer: {
    marginRight: 10,
  },
  textSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: "white",
  },
  sectionMarkdown: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  topoContainer: {
    marginTop: 25,
  },
  topoTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.headingText,
    marginBottom: 15,
    paddingLeft: 5,
  },
  topoImagesPanel: {
    paddingVertical: 5,
  },
  topoImageContainer: {
    marginRight: 15,
    marginBottom: 10,
  },
  topoImagePanel: {
    borderRadius: 15,
    backgroundColor: Colors.cardBackground,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
  },
  imageWrapper: {
    width: 140,
    height: 140,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  oneImageTopo: {
    width: '100%',
    height: '100%',
  },
  topoImageDescription: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    color: Colors.textMuted,
    maxWidth: 140,
  },
  imageViewerFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  imageViewerDescription: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  imageViewerCount: {
    marginBottom: 10,
    color: 'white',
    fontSize: 14,
  },
  routesContainer: {
    marginTop: 25,
  },
  routesTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.headingText,
    marginBottom: 15,
    paddingLeft: 5,
  },
  tableContainer: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    paddingBottom: 10, // Add padding to bottom for better spacing of last row
  },
  tableHeader: {
    backgroundColor: Colors.tertiaryColorNeutral,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingVertical: 5,
  },
  tableTitleText: {
    color: Colors.tableHeaderText,
    fontWeight: '700',
    fontSize: 13,
  },
  tableColNumber: { flex: 0.4, justifyContent: 'flex-start', paddingLeft: 15 },
  tableColName: { flex: 1.5, justifyContent: 'flex-start' },
  tableColGrade: { flex: 0.8, justifyContent: 'center' },
  tableColInterest: { flex: 1, justifyContent: 'center' },
  tableColInfo: { flex: 1.2, justifyContent: 'center' },

  dataTableRow: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    minHeight: 50,
  },
  routeCellText: {
    fontSize: 12,
    color: Colors.text,
  },
  routeCellNumber: { flex: 0.4, justifyContent: 'flex-start', paddingLeft: 15 },
  routeCellName: { flex: 1.5, justifyContent: 'flex-start' },
  routeCellGrade: { flex: 0.8, justifyContent: 'center' },
  routeCellStars: { flex: 1, justifyContent: 'center' },
  routeCellActions: { flex: 1.2, justifyContent: 'center' },

  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    marginHorizontal: 1,
  },
  routeActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  routeActionButton: {
    padding: 5,
  },
  moreInfoRowContainer: {
    backgroundColor: Colors.subtleBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  moreInfoCell: {
    flex: 1,
    paddingLeft: 0, // Adjust if needed
  },
  moreInfoRouteContainer: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.infoCardBackground,
    borderRadius: 10,
    margin: 10,
    width: 'auto', // Adjust to fill cell
  },
  moreInfoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  moreInfoLabel: {
    fontWeight: '600',
    color: Colors.headingText,
    marginRight: 5,
    fontSize: 13,
  },
  moreInfoText: {
    color: Colors.text,
    fontSize: 13,
    flexShrink: 1, // Allow text to wrap
  },
});