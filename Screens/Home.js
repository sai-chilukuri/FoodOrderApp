import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Alert,ScrollView } from 'react-native';
import ResturantItems from '../components/ResturantDetails';
import HeaderTabs from '../components/HeaderTabs'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar';
import ResturantItem from '../components/ResturtantItems';
import BottomTabs from '../components/BottomsTabs'



export default function Home({Navigation}) {
  return (
      <View style={{backgroundColor:"#ffe6e6",flex:1}}>
        <View style={{backgroundColor:"white",padding:15,marginTop:15}}>
        <HeaderTabs/>
        <SearchBar/>
        </View>
       <ScrollView>
     <Categories/>
     <ResturantItem navigate={Navigation}/>
    </ScrollView>
    <BottomTabs/>
     </View>
  );
}


