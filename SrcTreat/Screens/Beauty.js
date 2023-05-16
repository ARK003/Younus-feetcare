import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
// import MapView,{Marker,Callout} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RNLocalSearch from 'react-native-localsearch';
const Beauty = () => {
  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  
  useEffect(() => {
   
    // Geolocation.getCurrentPosition((pos) => {
    //   const crd = pos.coords;
    //   setPosition({
    //     latitude: crd.latitude,
    //     longitude: crd.longitude,
    //     latitudeDelta: 0.0421,
    //     longitudeDelta: 0.0421,
    //   });
    //   const region ={
    //     latitude: crd.latitude,
    //     longitude: crd.longitude,
    //     latitudeDelta: 0.0421,
    //     longitudeDelta: 0.0421,
    //   }
    
    // })
      // RNLocalSearch.searchForLocations('Salon', {
      //   latitude: 71.45231,
      //   longitude: 31.34321,
      //   latitudeDelta: 0.0421,
      //   longitudeDelta: 0.0421,
      // } , (err, resp) => {
      //   if (resp) {
      //   setMarkers(resp);
      //   console.log("resp",resp)
      //   }
      //   });
  }, []);

  // if(position){
  // return (
  //  <SafeAreaView style={{flex:1,}}>
  //      <MapView
  //         maxZoomLevel={15}
  //        style={{ flex: 1 }}
  //       //  showsUserLocation
  //        initialRegion={position}
  //         showsMyLocationButton={true}
  //         followsUserLocation={true}
  //         showsCompass={true}
  //         scrollEnabled={true}
  //         zoomEnabled={true}
  //         pitchEnabled={true}
  //         rotateEnabled={true}
  //         userInterfaceStyle={"light"}
  //         mapType="standard"
  //     >
  //        <Marker
        
  //      title='This is a description'
  //      coordinate={position}>
  //        <MaterialIcons name="location-pin" size={30} color="red" />
         
  //      </Marker>

  //     </MapView>
  //  </SafeAreaView>
  
  // )
  // }else{
    return(
      <View style={{flex:1,}}>
        <Text>Beauty</Text>
      </View>
    )
  // }
}

export default Beauty

const styles = StyleSheet.create({})