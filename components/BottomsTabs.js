import React from "react";
import {View,Text,TouchableOpacity,Alert} from "react-native";
import { useState } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";

export default function BottomTabs(){
    const [activeTab,setActiveTab]=useState("Home");
    const navigation=useNavigation();

    return(
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:5,backgroundColor:"#fff2e6"}}>
            <Icon name="home" text="Home" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Icon name="search" text="Browse" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Icon name="cart-plus" text="Orders" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Icon name="user-circle" text="Account" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    )
}

const Icon=(props)=>{
    const  navigation=useNavigation();
    const onTabChange=(prop)=>{
        prop.setActiveTab(prop.text)
        if(prop.text=='Account'){
            navigation.navigate('login')
        }
        if(prop.text=='Orders'){
            navigation.navigate('orders')
        }
    }
    return(
        <TouchableOpacity onPress={()=>(onTabChange(props))}>
        <View style={[{alignItems:"center",backgroundColor:props.text==props.activeTab?"#cc6300":"#fff2e6",paddingHorizontal:20,paddingVertical:10,borderRadius:20}]}>
           <FontAwesome5 name={props.name} size={24} color={props.text==props.activeTab?"white":"black"} />
            <Text style={{color:props.text==props.activeTab?"white":"black"}}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    )
}