import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Modal} from 'react-native';
import colors from '../colors';
import TodoModal from './TodoModal';
export default class TodoList extends React.Component{
    state={
        showListVisible : false
    }
    toggleListModal(){//No of created todo list in the flex format
        this.setState({showListVisible: !this.state.showListVisible})
    }
    render(){
    const list=this.props.list
    const completedCount = list.todos.filter(todo =>todo.completed).length;
    const remainingCount=list.todos.length- completedCount;

    return(// on TodoModal is the TodoModal page which is create tuchableObecity Created LIST
        <View>
            <Modal
            animationType='slide' 
            visible={this.state.showListVisible}
            onRequestClose={()=>this.toggleListModal()}
            >
            <TodoModal                                            
             list={list} 
             closeModal={()=>this.toggleListModal()}
            updateList={this.props.updateList}/>
            </Modal>
            <TouchableOpacity 
               style={[styles.listContainer, {backgroundColor: list.color}]}
               onPress={()=>this.toggleListModal()}
            >
            <Text style={styles.listTitle}numberOfLines={1}>
                {list.name}
            </Text>
            <View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.count}>{remainingCount}</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>
            </View>
            <View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.count}>{completedCount}</Text>
                    <Text style={styles.subtitle}>Completed</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
    }
};

const styles=StyleSheet.create({
    listContainer:{
        fontSize:15,
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width:200
    },
    listTitle:{
        fontSize:24,
        fontWeight:"700",
        color:colors.white,
        marginBottom:18
    },
    count:{
        fontSize:48,
        fontWeight: "700",
        color:colors.white
    },
    subtitle:{
        fontSize:12,
        fontWeight: "700",
        color:colors.white
    },
});