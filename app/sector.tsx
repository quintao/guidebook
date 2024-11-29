import { Text, View, StyleSheet } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Colors from './constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


function renderReturn() {
  return(
    <View style={styles.returnContainer}>
      <Link href="/" style={styles.button}>
        <View style={styles.returnLine}>
        <Ionicons name="arrow-back" size={32} color="green" />
          <Text style={styles.returnLabel}>Retour</Text>
        </View>
      </Link>
    </View>
  )
}

function renderRestaurants(sector: any) {
  if (sector?.detailed_info?.restaurants == '') {
    return <></>
  }

  return(
    <View style={styles.sectionContent}>
      <View style={styles.sectionTitle}>
        <Ionicons name="restaurant" size={32} color="green" />
        <Text>Les restos</Text>
      </View>
      <Text style={styles.sectionText}>{sector?.detailed_info?.restaurants}</Text>
    </View>
  )
}

function renderAccess(sector: any) {
  if (sector?.detailed_info?.access == '') {
    return <></>
  }

  return(
    <View style={styles.sectionContent}>
      <View style={styles.sectionTitle}>
        <FontAwesome name="map-signs" size={24} color="black" />
        <Text>Access</Text>
      </View>
      <Text style={styles.sectionText}>{sector?.detailed_info?.access}</Text>
    </View>
  )
}

function renderGeneralInfo(sector: any) {
  return(
    <View style={styles.generalInfoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{sector?.overview?.name}</Text>
          <View style={styles.mapPinContainer}>
            <FontAwesome name="map-marker" size={30} color="black" />
          </View>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionText}>{sector?.detailed_info?.long_description}</Text>
        </View>

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

export default function SectorScreen() {
  const params = useLocalSearchParams();
  const {target_sector} = params;
  const sector = JSON.parse(target_sector.toString());

  return (
    <View style={styles.container}>
      { renderReturn() }
      { renderSector(sector) }
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    marginTop: 50,
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
  titleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    padding: 10,
    fontWeight: 600,
    backgroundColor: 'red',
    borderRadius: 20,
    fontSize: 20
  },
  sectionTitle: {
    flexDirection: 'row'
  },
  sectionContent: {
    marginTop: 20,
    fontSize: 20

  },
  sectionText: {
    fontSize: 18
  },
  mapPinContainer: {
    marginLeft: 10
  }
});
