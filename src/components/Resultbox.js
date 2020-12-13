import React from "react";
import{Text,StyleSheet,FlatList,View, Image} from "react-native";


const Resultbox=({pass,text})=>{

    return(
        <View style = {styles.container}>
            <Image source={{ uri : `${pass.image}`}} style={styles.image}/>
            <Text style={styles.text}>{pass.name}</Text>
            
        </View>
    );

};

    const styles = StyleSheet.create({
        container:{marginLeft:15,
  
            borderWidth:1,
            backgroundColor:"#C0C0C0",
            borderRadius:5,
            flex:1,
            borderColor:"black",
            marginBottom:15
        },
        image:{
            width:"100%",
            height:100,    
            borderRadius:5
        },container1:{
            marginLeft:15,
            fontSize:15,
            fontWeight:"bold"
        },
        text: {
          color: "white",
          width:"100%",
          fontSize:12,
     
          textAlign: "center",
          backgroundColor: "#000000a0",
          position:"absolute"
        }
        
        });
 export default Resultbox;