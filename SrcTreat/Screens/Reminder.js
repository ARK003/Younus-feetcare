import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import notifee, { TimestampTrigger, TriggerType,AuthorizationStatus } from '@notifee/react-native';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
const Reminder = () => {
  const [text,setText] = useState("")
  const [dateset, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log('User pressed the notification.', detail.pressAction.id);
      }
    });
  },[])
  const Done=async ()=>{
    const settings = await notifee.requestPermission();
  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    const date = new Date(Date.now());
    const duration = dateset.getTime()-date.getTime()
    date.setTime(date.getTime() + duration);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
      alarmManager: true,
    };

    // // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Treat Your Feet',
        body: text?text:"Reminder Treatment",
        ios: {
          sound: 'local.wav',
          foregroundPresentationOptions: {
            badge: true,
            sound: true,
            banner: true,
            list: true,
          },
          backgroundPresentationOptions: {
            badge: true,
            sound: true,
            banner: true,
            list: true,
          },
          attachments:[
          {
            url: require('../assets/Images/logo.png'),
          },
          ]
        },
      },
      trigger,
    );
    Alert.alert('Reminder Add Successfully');
  } else {
    Alert.alert('User declined permissions');
  }
   
  }
  return (
   <SafeAreaView style={{flex:1,backgroundColor:"#ff69b4"}}>
     <ScrollView style={{flex:1,backgroundColor:"#ff69b4",marginTop:5}}>
     <TouchableOpacity onPress={() => setOpen(true)}  style={{height:40,backgroundColor:"white",margin:10,borderRadius:8,justifyContent:"center",paddingHorizontal:15}}>
       <Text style={{color:"black",fontSize:16,fontWeight:"600"}}>{moment(dateset).format('LT')}</Text>
     </TouchableOpacity >
     <View style={{height:250,backgroundColor:"white",margin:10,borderRadius:8,paddingHorizontal:15,paddingVertical:5}}>
      <TextInput
      value={text}
      onChangeText={(text)=>setText(text)}
      placeholder="Reminder"
      placeholderTextColor="black"
      style={{color:"black",fontSize:16,fontWeight:"500",textAlign:"justify",lineHeight:17}}
      multiline={true}
       />
     </View>
     <View style={{height:40,marginHorizontal:10,flexDirection:"row",justifyContent:"space-between",borderRadius:8,marginVertical:20}}>
      <TouchableOpacity onPress={()=>setDate(new Date())} style={{flex:0.2,backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:8,borderWidth:2,borderColor:"#6b8e23"}}>
      <Text  style={{color:"black",fontSize:16,fontWeight:"600",}}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Done()} style={{flex:0.7,backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:8,borderWidth:2,borderColor:"#6b8e23"}}>
      <Text  style={{color:"#6b8e23",fontSize:18,fontWeight:"600",}}>Done</Text>
      </TouchableOpacity>
     </View>
     </ScrollView>
     <DatePicker
        modal
        minimumDate={new Date()}
        mode='time'
        open={open}
        date={dateset}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
     {/* {
       chosenDatemodal?
     <View style={{flex: 1,justifyContent: 'center',}}>
      <DatePicker mode='time' minimumDate={new Date()} date={chosenDate} onDateChange={(date)=>{
        setChosenDate(date)
        setChosenDateModal(false)
      }} />
    </View>:null
     } */}
   </SafeAreaView>
  )
}

export default Reminder

const styles = StyleSheet.create({})