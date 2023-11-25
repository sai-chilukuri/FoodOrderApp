import React from "react";
import {View,Text,Image, TouchableOpacity,Alert} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { resturantItems } from "./JsonData";
import {useNavigation} from '@react-navigation/native';

export default function ResturantItem(props){
    const Navigation=useNavigation();
    return(
        <View>
           
            {
                resturantItems.map((item)=>{
                   return <TouchableOpacity activeOpacity={1} onPress={()=>Navigation.navigate('Resturant',{
                    title:item.title,
                    image:item.image,
                    details:`${item.rating} ${item.prepationTime}`
                   })}>
                   <ResturantImage image={item.image}/>
                    <ResturantInfo rating={item.rating} prepTM={item.prepationTime} title={item.title}/>
                    </TouchableOpacity>
                })
            }
      
        </View>
    )
}

const ResturantImage=(props)=>{
    return(
        <View>
        <Image source={props.image} style={{height:180,width:'100%',borderRadius:10}}/>
        <TouchableOpacity style={{position:'absolute',right:20,top:30}}>
            <MaterialCommunityIcons name="heart-outline" size={28} color="white"/>
        </TouchableOpacity>
        </View>
    )
}

const ResturantInfo=(props)=>{
    return(
        <View style={{flexDirection:'row',justifyContent:"space-between",padding:2,alignItems:'center',marginBottom:20}}>
        <View >
            <Text style={{fontWeight:"600",fontSize:16}}>{props.title}</Text>
            <Text style={{color:'#734d26',fontWeight:'800'}}>{props.prepTM}</Text>
        </View>
        <View style={{backgroundColor:'yellow',width:50,alignItems:"center",borderRadius:40,padding:4}}>
            <Text>{props.rating}</Text>
        </View>
        </View>
    )
}