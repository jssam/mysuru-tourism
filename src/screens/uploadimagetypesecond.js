import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View,ToastAndroid, Image, ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput, ScrollView, TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { uploadImage } from "../firebase/Firebaseapi";
import { getmemetypetwo } from "../firebase/Meme";
import { ColorPicker } from 'react-native-color-picker';
import Navbar from "../components/Navbar";
import Headera from "../components/header";
import { getimages , setdata, getdesti} from '../firebase/Firebaseapi';

import Resultbox from '../components/Resultbox';
import { getActiveChildNavigationOptions } from "react-navigation";

const uploadimagetypesecond = ({ navigation }) => {
  const newurl = navigation.getParam('url');
  const firnewurl = navigation.getParam('fiurl');

  const [selectedImage, setSelectedImage] = useState("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5");
  const [ImageUrl, setImageUrl] = useState("");
  const [firsttext, setfirsttext] = useState("");
  const [secondttext, setsecondtext] = useState("");
  const [color, setcolor] = useState("#FFFFFF");
  const [load, setload] = useState(false);
  
  

  
  const [transfer,settransfer]= useState([]);
  const [sam,setsam]= useState([]);
    

    useEffect(()=>{
     getimages(settransfer,setload);
     getdesti(setsam,setload);
     },[]);
   
console.log(color);
  return (<View style={{ flex: 1, backgroundColor: "black" }}>
    <Headera />
    {load ? <View style={{ flex: 1, alignContent: "center" }}>
      <Image style={{ height: "70%", resizeMode: 'contain', width: "100%" }} source={require("../../images/pica.gif")} />
      <ActivityIndicator size="large" color="#CD853F" />
    </View> :
      <View style={{ flex: 1, backgroundColor: 'black' }}>
    
        <View style={{width:"100%",flex:1}}>
        <Text style={{color:"#ffa500",textAlign:"center",fontWeight:"bold",fontSize:30,width:"100%" }} >Your destinations</Text>
        <FlatList
data={sam}
numColumns={2}
keyExtractor={(results) =>{return `${results.id}`}}
renderItem={({item})=>{
  
    return<View style={{width:"100%",backgroundColor:"gray", margin:7,borderRadius:5}}> 

<Text style={{width:"100%",flex:1,color:"white",height:35, marginLeft:10}}>{item.image}</Text>
    </View>
}}/>
        </View>
          
          <View style={styles.textinputcontainer5}>
          
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Add your destinations"
              value={secondttext}
              onChangeText={setsecondtext}
              onSubmitEditing={()=>setdata(secondttext)}
            /></View>
        
       <View style={{width:"100%",flex:1}}>
       <Text style={{color:"#ffa500",textAlign:"center",fontWeight:"bold",fontSize:30,width:"100%" }} >Reference</Text>
        <FlatList
data={transfer}
numColumns={2}
keyExtractor={(results) =>{return `${results.id}`}}
renderItem={({item})=>{
  
    return<View style={{width:"50%"}}> 

<TouchableOpacity onPress={()=>navigation.navigate("both" , {cheap:`${item.cheap}`,nearby:`${item.nearby}`,name:`${item.name}`,timing:`${item.timing}`,url :`${item.image}` ,latitude:`${item.latitude}`,description:`${item.description}`,longitude:`${item.longitude}`})}> 
    <Resultbox pass = {item} text={"Meme Templates"}/>
    </TouchableOpacity></View>
}}/>
</View>
      </View>}
  </View>


  )
}

uploadimagetypesecond.navigationOptions = () => {
  return {
    headerStyle: styles.navbar
  };
}

const styles = StyleSheet.create({

  container: {
    height: "100%",
    backgroundColor: "#2D2D2D",
    flex: 1,
    width: "100%",
    flexDirection: "column"
  },
  imageContainer: {

    borderColor: 'black',
    backgroundColor: 'black',
    width: '93%',
    height: "60%",
    marginHorizontal: 10,
  },
 
  previewImage: {
    width: '100%',
    height: "100%", resizeMode:'contain'
  }, textinputcontainer: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 45,
    
  },textinputcontainer5: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 45,
    marginTop:60,
    bottom:"6%"
    
  }, textinputcontainer3: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 45,
    marginBottom: 2
  }, textinput: {
    width: "100%",
    height: "100%",
    fontSize: 18,
    borderRadius: 2,
    padding: 5,
    backgroundColor: '#CD853F',
    color: "white"
  },
  text: {
    textAlign: 'center',
    fontFamily: 'notoserif',
    fontSize: 20,
    fontStyle: 'italic',
    color: "white",
    height: 30


  },
  textinput1: {
    marginTop: 40,
    width: "100%",
    height: "100%",
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center"
  },
  textinput2: {
    marginTop: "99%",
    width: "100%",
    height: "100%", fontWeight: 'bold',
    fontSize: 25,
    color: "white", textAlign: "center"
  }, imageContainer2: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: 'red'
  },
})

export default uploadimagetypesecond;