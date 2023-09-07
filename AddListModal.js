import React from "react";
import {View,Text,StyleSheet,KeyboardAvoidingView, TouchableOpacity,TextInput} from "react-native";
import colors from "../colors";
import {AntDesign} from "@expo/vector-icons";
import tempData from "../tempData";
export default class AddListModal extends React.Component{
    backgroundColor=["#f4a460","#00ff7f","#008000","#808000","#6a5acd","#00FFFF","#FF00FF"];
    state={
        name:"",
        color:this.backgroundColor[0]
    }
    createTodo=()=>{//this function create the list of daily todon on first render page
        const {name,color}=this.state;
        const list={name,color};
        this.props.addList(list);
        this.setState({name:""});
        this.props.closeModal();
    };
    renderColors(){
        return this.backgroundColor.map(color=>{
            return(
                <TouchableOpacity key={color}
                 style={[styles.colorSelect,{backgroundColor:color}]}
                 onPress={()=> this.setState({color})}
                 />
            ); 
        });
    }
    render()
    {
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              <TouchableOpacity style={{position: "absolute", top:64, right:32}} onPress={this.props.closeModal}>
                <AntDesign name="close" size={24} color={colors.red}/>
              </TouchableOpacity>
              <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                <Text style={styles.title}>Create Todo List </Text>
                <TextInput style={styles.input} 
                placeholder="create-Menu?"
                onChangeText={text => this.setState({name: text})}//this create set of Colors on page select one crete todo
                />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:12}}>
                    {this.renderColors()}
                </View>
                <TouchableOpacity style={[styles.create,{backgroundColor: this.state.color}]}//background color is array of color it is crete button  button color chagne by select on color
                onPress={this.createTodo}>
                  <Text style={{color:colors.white,fontSize:25,fontWeight:"800",textAlign:"center"}}>Create List</Text>  
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff5ee",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    create:{
       marginTop:24,
       height: 50,
       borderRadius:6,
       alignItem: "center",
       justifyContent: "center"
    },
    input:{
    borderColor: colors.black,  // Set the border color here
    borderWidth: 2,
    borderRadius:5,
    height: 50,
    marginTop: 8,
    paddingHorizontal:16,
    fontSize:18,
    backgroundColor:"#e6e6fa"
    },
    title:{
        fontSize: 70,
        textAlign:"center",
        color:colors.blueIm,
        fontWeight: "800",
        alignSelf: "center",
        marginBottom: 16
    },
    colorSelect:{
      width:30,
      height:30,
      borderRadius: 4
    }

})