import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
export default function OnboardingScreen(){
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home');

    }
    return(
        <View style={styles.container}>
            <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            containerStyles={{paddingHorizontal: 15}}
           pages={[
      
    {
        backgroundColor: '#7fff00',
        image: <Image style={styles.img} source={require('../assets/img22.jpg')} />,
        title: (<View><Text style={styles.txt1}>Todo List</Text></View>),
        subtitle: (<View><Text style={styles.txt2}>“Implement whatever organizational system works best for you, but then be sure to review your to-do list at least once a week."</Text></View>),
      },
      {
        backgroundColor: '#00ffff',
        image: <Image style={styles.img} source={require('../assets/img23.png')} />,
        title: (<View><Text style={styles.txt1}>Daily Update</Text></View>),
        subtitle: (<View><Text style={styles.txt2}>“Each day I will accomplish one thing on my to do list.”"</Text></View>),
      },
      {
        backgroundColor: '#ffb6c1',
        image: <Image style={styles.img} source={require('../assets/img25.jpg')} />,
        title: (<View><Text style={styles.txt1}>Remember Everthing!!</Text></View>),
        subtitle: (<View><Text style={styles.txt2}>“Forget your to-do list and create a to-be list.”</Text></View>),
      },
  ]}
/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    img:{
        borderRadius:50,
        height:350,
        width:350
    },
    txt1:{
        fontFamily:"Monospace",
       color:'#FF0000',
       fontSize:40,
       fontWeight: "700",
    },
    txt2:{
        fontFamily:"Monospace",
       color:'#800080',
       fontSize:20,
       textAlign:"center",
       fontStyle:"italic"
    }
}
)