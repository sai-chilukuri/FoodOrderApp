import React from "react";
import {View,Text} from "react-native";
import { useState } from "react";

export default function ViewButton(props){
    const [totalPrice,setTotalPrice]=useState(0);
    const addPrice=()=>{
        setTotalPrice(props.Data?.reduce((a,b)=>{a+b},0))
    }
    return(
        <View>
            <Text style={{backgroundColor:"black",color:"white",borderRadius:20,width:200,textAlign:"center",padding:10,justifyContent:"center"}}>
                Place Order {props.Data?.length}
            </Text>
        </View>
    )
}