import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Alert,ScrollView } from 'react-native';
import Home from './Screens/Home';
import RoutingContainer from './StackNavigator';

export default function App() {
  return (
    <RoutingContainer/>
  );
}


