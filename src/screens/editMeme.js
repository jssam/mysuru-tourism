import React, { useState} from "react";
import{StyleSheet,View, Image, ImageBackground,ToastAndroid, Text, ActivityIndicator, ScrollView} from "react-native";
import {TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { getmeme } from "../firebase/Meme";
import Navbar from "../components/Navbar";
import Headera from "../components/header";
import { ColorPicker } from 'react-native-color-picker';
import getDirections from 'react-native-google-maps-directions';

const editMeme=({navigation})=>{
  //location dhundne vala
  const latitude1 = parseFloat(navigation.getParam('latitude'));
  const longitude1 = parseFloat(navigation.getParam('longitude'));
  const description = navigation.getParam('description');
  const time = navigation.getParam('timing');
  const nearby = navigation.getParam('nearby');
  const cheap = navigation.getParam('cheap');
  const name = navigation.getParam('name');
    const data = {

       source: {
        latitude: 28.676790,
        longitude: 77.262001
      },
      destination: {
        latitude: `${latitude1}`,
        longitude: `${longitude1}`
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
      ]
    }
 const getdirec = ()=>{
    getDirections(data);
    console.log({longitude1});
 }
    const id = navigation.getParam('url');
 
    const [firsttext, setfirsttext] = useState("");
    const [secondttext, setsecondtext] = useState("");
    const [load,setload]=useState(false);
    const [color, setcolor] = useState("#000000");
 
    return(
      <View style= {{flex:1 , backgroundColor:"black"}}>
      <ImageBackground source={{uri:`${id}`}} style={styles.image}>
      
      <Headera/>
      {load ?<View style={{flex:1,alignContent:"center"}}><Image  style={{ height:"70%", resizeMode:'contain',
          width: "100%"}}
              source={require("../../images/pica.gif") } /> 
              <ActivityIndicator  size="large" color="#CD853F"/>
        </View>:   <View  style={styles.container}>
      
             <View  style={styles.container}>
             <View style={{backgroundColor:"#0605058d" ,width:"100%",height:50}}>
           <Text style={{color:"#ffa500",textAlign:"center",fontWeight:"bold",fontSize:30 }} >{name}</Text>
           </View>
           <View style={{backgroundColor:"#0605058d" ,width:"95%",flex:1, marginLeft:10,marginRight:20}}>
           <Text style={{color:"white",fontSize:20,padding:5 }} >{description}</Text>
          
           <Text style={{color:"white",fontWeight:"bold",fontSize:20 }} >Timming :- {time}</Text>
           <Text style={{color:"white",fontWeight:"bold",fontSize:20 }} >Location :- </Text>
           <TouchableOpacity onPress={()=>{getdirec();}}>
               <Text style={{color:"#CD853F",fontWeight:"bold",fontSize:20,marginLeft:10}}>Your destination</Text>
      
            </TouchableOpacity>
           <Text style={{color:"white",fontWeight:"bold",fontSize:20 }} >Nearby :-{nearby}</Text>
           <Text style={{color:"white",fontWeight:"bold",fontSize:20 }} >Cheap :-{cheap}</Text>
      
      
            </View>
      
        
          </View>
         
          </View>
                 
      
      }
       </ImageBackground>
           </View>);};
      const styles=StyleSheet.create({
        textinput: {
          width:"100%",
          fontSize:18,
          borderRadius:2,
          padding:5,
          backgroundColor:'#CD853F',
         color:"white"
        },  previewImage: {
          flex:1,
          width: "100%",
          height: "100%", resizeMode:'contain'
        },  textinputcontainer:{
          borderLeftColor: 'black',
          borderRightColor: 'black',
          marginHorizontal:10,
          width: '93%',
          height: 77,
        }, imageContainer: {
          borderColor: 'white',
          backgroundColor: 'black',
          width: '93%',
          height: "68%",
          marginLeft:10
      
        },container: {
          flex: 1,
          flexDirection: "column",
          backgroundColor:"#dadada00"
        },
        image: {
          flex: 1,
          resizeMode: "cover",
        },
      
        navbar:{
          backgroundColor: 'red'},
      })
export default editMeme;