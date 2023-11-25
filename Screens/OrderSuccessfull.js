import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,Image,BackHandler, TouchableOpacity} from "react-native"
import { useRoute,useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/MenuItems';
import AntDesign from "react-native-vector-icons/AntDesign"

function OrderSuccessfull() {
const route=useRoute();
const navigation=useNavigation()
const [randomValue,setRandomValue]=useState('');
const [totalAmount,setTotalAmount]=useState(0);

useEffect(()=>{
    randomGenerator();
    let count=0;
route.params.item.map((item)=>count=count+item.cost);
setTotalAmount(count)
},[])


const randomGenerator=()=>{
    let random_Value='';
    for(i=0;i<=10;i++){
        random_Value=random_Value+Math.floor(Math.random()*10)
    }
    setRandomValue(random_Value)
}
const handleBackPress=()=>{
    navigation.goBack()
}
    return (
       <View style={{marginTop:30}}>
        <View style={{backgroundColor:'blue',height:300,width:"100%",position:"relative",borderTopRightRadius:20,borderTopLeftRadius:20}}>
            <TouchableOpacity onPress={handleBackPress} activeOpacity={1}>
            <AntDesign name='arrowleft' color={'white'} style={{margin:10}} size={30}/>
            </TouchableOpacity>
           <Text style={{color:'white',fontWeight:'800',fontSize:30,alignSelf:"center",marginTop:10}}>My Order</Text>
            <View style={{position:'absolute',width:350,height:600,top:130,backgroundColor:'white',left:20,right:20,borderRadius:20}}>
                <View style={{alignSelf:'center',marginTop:30}}>
                <AntDesign name='checkcircle' size={100}/>
                </View>
                <Text style={{fontSize:30,textAlign:'center',fontWeight:'800'}}>Your order has been placed</Text>
                <View style={{backgroundColor:'#e4e5ff',marginTop:30,width:300,heigth:100,position:"relative",alignSelf:'center',padding:20,borderRadius:20,borderColor:'blue',borderWidth:1}}>
                    <Text style={{textAlign:'center'}}>Order ID:{randomValue}</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'500',marginTop:30}}>Total Paid:{totalAmount}</Text>
                </View>
            </View>
        </View>
        {/* <Image source={require('../assets/animations/order_placed.png')} style={{height:200,width:400,borderRadius:10}}/> */}
        {/* <MenuItems items={route.params.item} nocheck={true}/> */}
       </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})
export default OrderSuccessfull;