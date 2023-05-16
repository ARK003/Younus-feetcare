import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const Details = (props) => {
  const item = props?.item
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ff69b4"}}>
       
        <View style={{height:50,flexDirection:"row",marginHorizontal:10}}>
                  <TouchableOpacity  onPress={()=>{props.onItem(null),props.onEdit(false)}} style={{flex:0.15,justifyContent:"center",alignItems:"center"}}>
                  <MaterialIcons name="arrow-back-ios" size={25} color={"white"} />
                  </TouchableOpacity>
                  <View style={{flex:0.65,justifyContent:"center",alignItems:"center"}}>
                  <Text style={{fontSize:16,fontWeight:"700",color:"white"}}>{item.title}</Text>
                  </View>
                  <TouchableOpacity style={{flex:0.2,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:16,fontWeight:"700",color:"white"}}>Share</Text>
                  </TouchableOpacity>
                  </View>
        <ScrollView>
        <TouchableOpacity onPress={()=>{
          Linking.openURL(item.link);
        }} style={{height:180,}}>
        <Image source={item.image} style={{height:"100%",width:"100%",resizeMode:"cover"}} />
        </TouchableOpacity>
        <View style={{margin:10}}>
          <Text style={{fontSize:14,fontWeight:"400",color:"white",textAlign:"left",lineHeight:18,}}>
          {item.desc}
          </Text>
        </View>
        <Text style={{fontSize:20,fontWeight:"700",color:"white",marginTop: 5,marginHorizontal:10}}>You will need:</Text>
        <View style={{marginHorizontal:10,}}>
          {
            item?.ingredients.map((e,index)=>{
              return(
              <View key={index} style={{marginTop:10,flexDirection:"row",padding:5}}>
              <TouchableOpacity
              style={{height:15,width:15,marginTop:1,marginRight:10,borderWidth:2,borderColor:"white"}}
              />
              <Text style={{fontSize:16,fontWeight:"500",color:"white",textAlign:"left",lineHeight:18,}}>
              {e}
              </Text>
              </View>
              )
            })
          }
          
        </View>
        <Text style={{fontSize:20,fontWeight:"700",color:"white",marginTop: 5,marginHorizontal:10}}>Instructaions:</Text>
        <View style={{marginHorizontal:10,}}>
          {
            item?.method.map((e,index)=>{
              return(
              <View key={index} style={{marginTop:10,padding:5}}>
              <Text style={{fontSize:16,fontWeight:"500",color:"white",textAlign:"left",lineHeight:18,}}>
              {e}
              </Text>
              </View>
              )
            })
          }
          
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

// export default Details

const styles = StyleSheet.create({})