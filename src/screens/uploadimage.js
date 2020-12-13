import React, { useState } from "react";
import { StyleSheet, View, Image, ToastAndroid,  Text, ActivityIndicator } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { getmemetypetwo } from "../firebase/Meme";
import { ColorPicker } from 'react-native-color-picker';
import Headera from "../components/header";
import Navbar from "../components/Navbar";
import { uploadImage } from "../firebase/Firebaseapi";

const uploadimage = ({ navigation }) => {
  const id = navigation.getParam('url');
  const [firsttext, setfirsttext] = useState("");
  const [secondttext, setsecondtext] = useState("");
  const [color, setcolor] = useState("#FFFFFF");
  const [load, setload] = useState(false);
  return (<View style={{ flex: 1, backgroundColor: 'black' }}>
    <Headera />
    {load ? <View style={{ flex: 1, alignContent: "center" }}><Image style={{
      height: "70%", resizeMode: 'contain',
      width: "100%"
    }}
      source={require("../../images/pica.gif")} />
      <ActivityIndicator size="large" color="#CD853F" />
    </View> :
      <View style={{ flex: 1, backgroundColor: "#2D2D2D", flexDirection: "row" }}>
        <View style={styles.container}>

          
          <View style={styles.textinputcontainer}>
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Name"
              value={firsttext}
              onChangeText={setfirsttext}
            />

          </View> 
          <View style={styles.textinputcontainer}>
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Mail Id"
              value={firsttext}
              onChangeText={setfirsttext}
            />

          </View> 
          <View style={styles.textinputcontainer}>
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Phone number"
              value={firsttext}
              onChangeText={setfirsttext}
            />

          </View>
          <View style={styles.textinputcontainer}>
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Number of person"
              value={firsttext}
              onChangeText={setfirsttext}
            />

          </View>
          <View style={styles.textinputcontainer}>
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="verification id number"
              value={firsttext}
              onChangeText={setfirsttext}
            />

          </View>
          <View style={styles.textinputcontainer}>
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="payment mode"
              value={firsttext}
              onChangeText={setfirsttext}
            />

          </View>
          
          <TouchableOpacity  >
            <Image style={{ height: 60, width: 60 }}
              source={require("../../images/tick.png")} />
          </TouchableOpacity>

        </View>
      </View>}
  </View>
  );
};
const styles = StyleSheet.create({

  container: {
    height: "100%",
    backgroundColor: "#2D2D2D",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignContent:"center"
  },
  imageContainer: {

    borderColor: 'black',
    backgroundColor: 'black',
    width: '93%',
    height: "60%",
    marginHorizontal: 10,
  },
  textinputcontainer1: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 100,
    position: 'absolute'
  },
  button: {
    marginBottom: 20,

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
    marginBottom:10,
  }, textinputcontainer3: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 45,
    position:"absolute",
    marginTop:"100%",
    bottom:"8%",
  }, textinput: {
    width: "100%",
    height: "100%",
    fontSize: 18,
    borderRadius: 2,
    marginBottom:5,
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
    marginTop: 60,
    width: "100%",
    height: "100%",
    fontSize: 25,
    fontWeight: 'bold',
    color: "white"
  },
  textinput2: {
    marginTop: 300,
    width: "100%",
    height: "100%", fontWeight: 'bold',
    fontSize: 25,
    color: "white"
  }, imageContainer2: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: 'red'
  },
})
export default uploadimage;