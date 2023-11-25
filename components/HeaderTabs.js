import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Alert } from 'react-native';

export default function HeaderTabs() {
  const [activeTab,setActiveTab]=useState("delivery");
  return (
      <View style={styles.headerStyle}>
     <ButtonShare color="white" background="black" name="delivery" active={activeTab} setTab={setActiveTab}/>
     <ButtonShare color="white" background="black" name="pickup" active={activeTab} setTab={setActiveTab}/>
     </View>
  );
}

const ButtonShare=(props)=>{
return <TouchableOpacity onPress={()=>props.setTab(props.name)}>
    <View style={{backgroundColor:props.name==props.active?"black":"white",margin:5,borderRadius:30,alignItems:"center",paddingHorizontal:50,paddingVertical:10}}>
      <Text style={{color:props.name==props.active?"white":"black"}}>{props.name}</Text>
    </View>
</TouchableOpacity>
}


const styles=StyleSheet.create({
  headerStyle:{
    flexDirection:"row",
    justifyContent:"center",
  }
})

