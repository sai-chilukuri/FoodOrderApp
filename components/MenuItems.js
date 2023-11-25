import React, { useEffect ,useState} from "react";
import {View,Text,Image,ScrollView} from "react-native";
import { resturantDeatilsData } from "./JsonData";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ViewButton from "./ViewButton";

const image=require('../assets/images/Egg_Biryani2.jpeg');
const title="Spicy and Tasty Mutton Biryani With Fried Egg";
const details='Tandori Resturant 4.5';


export default function MenuItems(props){
 const [selectedItem,setSelectedItem]=useState([]);
 const [resturantItems,setResturantItems]=useState([]);
 useEffect(()=>{
   if(props.items){
    setResturantItems(props.items)
   }
   else{
    setResturantItems(resturantDeatilsData)
   }
 },[resturantDeatilsData,props.items])
 const setMenuItems=(c,item)=>{
    props.setItem(c,item)
 }
    return(
       <View>
            {
                resturantItems?.map((item)=>{
                   return(
                    <View style={{marginVertical:5,flexDirection:'row',justifyContent:"space-between",borderColor:"red",borderWidth:1,padding:5,backgroundColor:"white",borderRadius:20,alignItems:"center"}}>
                    {!props.nocheck&&<BouncyCheckbox fillColor="black" iconStyle={{borderRadius:10}} onPress={(checked)=>setMenuItems(checked,item)}/>}
                    <MenuTitle title={item.title} cost={item.cost}/>
                    <MenuImage image={item.image}/>  
                    </View>
                   )
                 })
            }
       </View>
    )
}

export const MenuTitle=(props)=>{
    return(
        
        <View style={{width:250}}>
              <Text style={{fontSize:14,fontWeight:"500",textAlign:"justify"}}>{props.title}</Text>
                <Text style={{fontSize:14,fontWeight:"500"}}>{props.details}</Text>
                <Text style={{fontSize:14,fontWeight:"800"}}>${props.cost}</Text>
        </View>
    )
}

export const MenuImage=(props)=>{
return(
    <View>
        <Image source={props.image} style={{width:80,height:100,borderRadius:20}}/>
    </View>
)
}