import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import colors from '../colors';
const MyPhoto=()=>{
    return (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require('../assets/ima13.jpg')}
          />
          <Text style={styles.tex}>Hello Rajesh!!!</Text>
          <AntDesign name="edit" size={24} color={colors.blue}  style={{marginRight:40}}/>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        marginTop:20,
        marginLeft:30,
        marginRight:0,
        backgroundColor:colors.blueIm,
        flexDirection: 'row', // Display children in a row
        alignItems: 'center',
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:colors.black,
        borderRadius: 10,// Center vertically
        marginBottom: 10,
      },
      tex:{
        fontSize:28,
        color:"#00ff00",
        fontWeight: "800",
        marginRight:10
      },
      img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 50,
        marginTop:10,
        marginBottom:10,
        marginLeft:30,
        marginEnd:100, // Add some spacing between the image and text
      },
    });
    
    export default MyPhoto;