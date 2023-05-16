import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
const Splash = () => {
  
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#696969"}}>
      <Image
        source={require('../assets/Images/logo.png')}
        style={{height:"20%",width: "20%",}}
      />
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({})