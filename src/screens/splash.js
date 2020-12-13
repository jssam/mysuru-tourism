import React, { Component, useState, useEffect } from 'react';
import {StyleSheet,View,Image,Text, ActivityIndicator} from 'react-native';

import { getimages } from '../firebase/Firebaseapi';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import Headera from '../components/header';
import Navbar from '../components/Navbar';

const home =  ({navigation})=>{
 const [transfer,settransfer]= useState([]);
 const [load,setload]=useState(true);

 useEffect(()=>{
  getimages(settransfer,setload);
  },[]);

  




   return(  <View style= {{flex:1 , backgroundColor:"black"}}>
     <Headera />
       {load ? <View style={{flex:1,alignContent:"center"}}><Image  style={{ height:"70%", resizeMode:'contain',
    width: "100%"}}
        source={require("../../images/fire.gif") } /> 
        <ActivityIndicator  size="large" color="#CD853F"/>
  </View>: 
   <View style={{flex:1,width:"100%",flexDirection:"row",}}>
      
      <Navbar nav={navigation} pop={"#E25822"} tem={"white"} edi={"white"} tren={"white"} star={"white"}/>
       <View style={styles.container}>
       <View style={{height:40,width:"100%",marginBottom:15,marginTop:15}}>
       <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:30 }}>POPULAR</Text>
     </View>
<FlatList
data={transfer}
keyExtractor={(results) =>{return `${results.id}`}}
renderItem={({item})=>{
  console.log(`${item.latitude}`+"ndksafj");
    return<View style={{width:"100%" ,flex:1}}>
     <TouchableOpacity onPress={()=>navigation.navigate("both" , {cheap:`${item.cheap}`,nearby:`${item.nearby}`,name:`${item.name}`,timing:`${item.timing}`,url :`${item.image}` ,latitude:`${item.latitude}`,description:`${item.description}`,longitude:`${item.longitude}`})}>
     <View style = {styles.container1}>
  
            <Image source={{ uri : `${item.image}`}} style={styles.image}/>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    </TouchableOpacity></View>
}}/>
</View>

       </View>}
       </View>
     );};

const styles = StyleSheet.create({


  container: {
      height:"100%",
    backgroundColor: "#2D2D2D",
    flex:1,
    width:"100%",
    flexDirection:"column"
  }, container1:{marginLeft:5,
marginRight:5,
    width:"100%",
    borderWidth:3,
    marginBottom:5,
    borderColor:"black",
    borderRadius:5,
    flex:1,
},
image:{
    width:"100%",
    height:170,    
    borderRadius:5
},
text: {
  color: "white",
  width:"100%",
  fontSize:20,
  fontWeight: "bold",
  textAlign: "center",
  backgroundColor: "#000000a0",
  position:"absolute"
}
 
});

export default home;
