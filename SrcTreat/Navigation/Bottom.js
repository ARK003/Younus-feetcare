
import * as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Beauty from '../Screens/Beauty';
import Reminder from '../Screens/Reminder';
import Details from '../Screens/Details';

const Tab = createBottomTabNavigator();





function App() {
  const [edit,setEdit] = React.useState(false)
  const [item,setItem] = React.useState(null)
  return (
      <Tab.Navigator
        initialRouteName="Menu"
        screenOptions={({ route }) => ({
          tabBarStyle:{
            backgroundColor:"#d3d3d3"
          },
          headerStyle:{
            backgroundColor:"#ff69b4",
          },

          headerTitleAlign:"center",
          headerTitleStyle:{
            color:"white",fontSize:22
          },
          tabBarActiveTintColor: '#800000',
          tabBarInactiveTintColor: '#db7093',
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Menu') {
              return (
                <FontAwesome
                  name={"th-list"}
                  size={size}
                  color={color}
                />
              );
              
            } else if (route.name === 'Beauty') {
                return (
                  <MaterialIcons
                    name={"more-horiz"}
                    size={size}
                    color={color}
                  />
                );
            }
            else if (route.name === 'Reminder') {
              return (
                <MaterialCommunityIcons
                  name={"calendar-month"}
                  size={size}
                  color={color}
                />
              );
            }
          
           
          }
        })}>
           <Tab.Screen
          name="Menu"
          options={{
            headerTitleAlign:"center",
            tabBarLabel: 'Menu',
            title:'Treat My Feet',
            headerShown:edit?false:true
          }}>
            {(props) => <Home edit={edit} onEdit={(e)=>setEdit(e)} item={item} onItem={(e)=>setItem(e)}  />}
          </Tab.Screen>
        {/* <Tab.Screen
          name="Menu"
          component={Home}
          options={{
            tabBarLabel: 'Menu',
            title: 'Treat My Feet',
          }}  
          
          /> */}
        <Tab.Screen
          name="Beauty"
          component={Beauty}
          options={{
           
            tabBarLabel: 'Beauty Parlous',
            title: 'Beauty Parlous'
          }} />
        <Tab.Screen
          name="Reminder"
          component={Reminder}
          options={{
           
            tabBarLabel: 'Reminder',
            title: 'Set Reminder'
          }} />
      </Tab.Navigator>
  );
}
export default App;