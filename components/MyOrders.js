import React, { useState } from 'react';
import {View,Text,TextInput, StyleSheet,Button, TouchableOpacity, Pressable, Alert,Modal,Dimensions} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import MenuItems from './MenuItems';
import Feather from 'react-native-vector-icons/Feather'


function MyOrders(props) {
    const navigation=useNavigation();

    const handleBackPress=()=>{
        navigation.goBack();
    }
    return (
       <View style={{backgroundColor:'#85a335',height:300,position:'relative',marginTop:20}}>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:"space-between",padding:20}}>
            <TouchableOpacity onPress={handleBackPress}>
            <Ionicons name='chevron-back' size={25} color={'white'}/>
            </TouchableOpacity>
            <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>My Orders</Text>
        </View>
        <View style={{position:"absolute",backgroundColor:'white',height:700,top:170,width:"100%",borderRadius:50}}>
        <View style={{marginTop:30,marginLeft:30}}>
            <DeliveryDetails/>
        </View>
        </View>
       </View>
    );
}

const DeliveryDetails=()=>{
    const [visible,setVisible]=useState(false);
    const screenWidth=Dimensions.get('window').width
    const screenHeight=Dimensions.get('window').height
    console.log("height",screenHeight)
    return(
        <>
        <View style={{backgroundColor:"#feebc1",width:330,padding:20,borderRadius:20}}>
        <View style={{flexDirection:'row',alignItems:"center"}}>
            <AntDesign name='home' size={40}/>
            <View style={{marginLeft:10}}>
            <Text style={{fontSize:16,fontWeight:'500'}}>Satya Niyalam</Text>
            <Text style={{color:"#a6a08c"}}>{`21-32-42,Banjara Hills \nHyderabad 500072`}</Text>
            </View>
            <Pressable onPress={()=>setVisible(!visible)}>
            <Feather name="edit" size={25} style={{marginLeft:40}}/>
            </Pressable>
        </View>
         <View style={{flexDirection:'row',alignItems:"center",marginTop:10}}>
         <AntDesign name='clockcircleo' size={30} style={{backgroundColor:"#e6b74e",padding:10,borderRadius:10}}/>
         <Text style={{marginLeft:10,fontWeight:'500',fontSize:16}}>30 Min</Text>
         <Text style={{marginLeft:30,fontWeight:'500',fontSize:16}}>Schedule Time</Text>
     </View>
     </View>
         <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setVisible(!visible);
          }}
        >
         <View style={{marginHorizontal:20, justifyContent: 'center',alignItems: 'center',flex:1}}>
            <View style={{backgroundColor:"white",height:screenHeight-600,width:screenWidth-80,borderRadius:20,borderWidth:2,borderColor:'#ffcc99'}}>
           <View style={{alignItems:"center",justifyContent:"center",flexDirection:"row",justifyContent:"space-between",margin:10}}>
           <Text style={{color:"red",fontWeight:'600',fontSize:16}}>Edit Address</Text>
           <Pressable onPress={()=>setVisible(false)}>
           <AntDesign name="close" size={20} />
           </Pressable>
           </View>
            </View>
            </View>
        </Modal>
     </>
    )
}

const LastOrderedItems=()=>{
    return(
        <View>
            <Text></Text>
        </View>
    )
}
export default MyOrders;

const styles=StyleSheet.create({
    inputContainer:{padding:0,width:230,textAlign:'start'},
    button: {
        backgroundColor: '#ffb74d',
        padding: 20,
        borderRadius: 30,
        marginTop:40,
        width: 300, // Set your desired width here
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'600',
        fontSize:16
      },
      inputViewContainer:{width:300,height:50,flexDirection:'row',alignItems:'center'}
})