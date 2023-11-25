import React from "react";
import {View,Text, BackHandler} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import IonIcon from  "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar(){
    return(
        <View style={{flexDirection:"row",marginTop:10}}>
            <GooglePlacesAutocomplete placeholder="search"
            styles={{
                textInput: {
                  height: 46,
                  color: 'red',
                  fontSize: 20,
                  fontWeight:'600',
                  backgroundColor:'#eee',
                  borderRadius:30
                },
                  textInputContainer:{
                    flexDirection:"row",
                    alignItems:'center',
                    backgroundColor:"#eee",
                    borderRadius:50
                  }
                
              }}
            renderRightButton={()=>(<View style={{flexDirection:"row",padding:5 }}><FontAwesomeIcon name="search" size={18} style={{marginRight:5}}/><Text style={{marginRight:10}}>Search</Text></View>)}
            renderLeftButton={()=>(<View style={{marginLeft:5}}><IonIcon name="location" size={24}/></View>)}/>
          
        </View>
    )
}