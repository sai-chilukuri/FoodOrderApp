import React from "react";
import {View,Text,Image,ScrollView} from "react-native";


const items=[{
    title:"Pickp-up",
    image:require('../assets/images/shopping-bag.png')
},{
    title:"Soft-drink",
    image:require('../assets/images/soft-drink.png')
},
{
    title:"Desserts",
    image:require('../assets/images/desserts.png')
},
{
    title:"Bakery-Items",
    image:require('../assets/images/bread.png')
},
{
    title:"Bakery-Items",
    image:require('../assets/images/fast-food.png')
}
]

export default function Categories(){
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:"row",marginTop:10}}>
        {items?.map((item)=>{
            return  <View style={{marginRight:20}}>
            <Image source={item.image} style={{height:50,width:50,resizeMode:"contain"}}/>
            <Text>{item.title}</Text>
        </View>
        })}
        </View>
</ScrollView>
    )
}