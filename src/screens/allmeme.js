import React, {  useState, useEffect } from 'react';
import {StyleSheet,View,Image,Text, ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { getimages} from '../firebase/Firebaseapi';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Resultbox from '../components/Resultbox';

import Navbar from '../components/Navbar';
import Headera from '../components/header';

const allprocessed =  ({navigation})=>{
 const [transfer,settransfer]= useState([]);
 const [load,setload]=useState(true);
 useEffect(()=>{
  getimages(settransfer,setload);
  },[]);

  

console.log("123");


   return(  <View style= {{flex:1 , backgroundColor:"black"}}>
     <Headera/>
       {load ? <View style={{flex:1,alignContent:"center"}}><Image  style={{ height:"70%", resizeMode:'contain',
    width: "100%"}}
        source={require("../../images/fire.gif") } /> 
        <ActivityIndicator  size="large" color="#CD853F"/>
  </View>: 
   <View style={{flex:1,width:"100%",flexDirection:"row",}}>
       <Navbar nav={navigation} pop={"white"} tem={"white"} edi={"white"} tren={"#E25822"} star={"white"}/>
   <View style={styles.container}>
     
     <View style={{height:40,width:"100%",marginBottom:15,marginTop:15}}>
       <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:30 }}>All places</Text>
     </View>
   <FlatList
data={transfer}
numColumns={2}
keyExtractor={(results) =>{return `${results.id}`}}
renderItem={({item})=>{
  
    return<View style={{width:"50%"}}> 
<TouchableOpacity onPress={()=>navigation.navigate("Home1" , {url :`${item.image}` ,latitude:`${item.latitude}`,description:`${item.description}`,longitude:`${item.longitude}`})}>
    
    <Resultbox pass = {item} text={"Meme Templates"}/>
    </TouchableOpacity></View>
}}/>
</View>

   </View>}
   </View>
 );};

const styles = StyleSheet.create({


container: {
  height:"100%",
backgroundColor:"#2D2D2D",
flex:1,
width:"100%",
flexDirection:"column"
}, container1:{marginLeft:5,
marginRight:5,
width:"100%",
borderWidth:10,
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

export default allprocessed;