import { useRoute,useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {View,Text,Image, ScrollView, TouchableOpacity} from "react-native";
import MenuItems from "./MenuItems";
import ViewButton from "./ViewButton";


export default function ResturantItems(){
    const route=useRoute();
    const navigation=useNavigation();
    const [items,setItems]=useState([]);
    console.log("Itemss",items)
    const selectedItem=(checkbox,item)=>{
        if(checkbox){
            setItems((prev)=>[...prev,item])
        }
        if(!checkbox){
            let filterItem=items.filter((fItem)=>fItem?.title!=item?.title);
            setItems(filterItem)
        }
    }
    return(
        <View style={{flex:1}}>
            <ImageData image={route.params.image}/>
            <TitleWithDetail details={route.params.details} title={route.params.title}/>
            <ScrollView>
                <View style={{padding:5}}>
                <MenuItems setItem={selectedItem}/>
                </View>
            </ScrollView>
            <View style={{alignItems:"center"}}>
            <View style={{position:'absolute',bottom:30}}>
                {items.length>0&&<TouchableOpacity onPress={()=>navigation.navigate('placeOrder',{item:items})}>
             <ViewButton Data={items} />
            </TouchableOpacity>} 
            </View>
            </View>
        </View>
    )
}
const ImageData=(props)=>{
    return(
        <Image source={props.image} style={{height:200,width:"100%"}}/>
    )
}

const TitleWithDetail=(props)=>{
    return(
        <View>
        <Text style={{fontWeight:'700',fontSize:25,marginLeft:10}}>{props.title}</Text>
        <Text style={{marginLeft:10}}>{props.details}</Text>
        </View>
    )
}