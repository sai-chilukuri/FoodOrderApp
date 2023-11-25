import React, { useState } from 'react';
import {View,Text,TextInput, StyleSheet,Button, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



function Login(props) {
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

            <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>Forgot password?</Text>
        </View>
        <View style={{position:"absolute",backgroundColor:'white',height:700,top:170,width:"100%",borderRadius:50}}>
        <View style={{marginTop:30,marginLeft:30}}>
        <View>
            <Text style={{fontSize:23,fontWeight:'500'}}>Let's get something</Text>
            <Text style={{marginTop:10}}>Good to see you back</Text>
            <View style={{flexDirection:'row',marginTop:20}}>
            <AntDesign name='google' size={40} />
            <Entypo name='facebook-with-circle' size={40} style={{marginLeft:10}}/>
            <Entypo name='twitter-with-circle' size={40} style={{marginLeft:10}}/>
            </View>
        </View>
        <FormInputs/>
        <View style={{marginTop:20,flexDirection:'row',marginLeft:60}}>
            <Text>Don't have account?</Text>
            <Text style={{color:'blue'}}>Sign In</Text>
        </View>
        </View>
        </View>
        
       </View>
    );
}
const FormInputs=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [showPassword,setShowPassword]=useState();
    return(
    <View style={{marginTop:20}}>
        <View style={{backgroundColor:'#f0f0f0',borderRadius:20,width:300}}>
        <View style={[styles.inputViewContainer,{paddingHorizontal:5}]}>
            <AntDesign name='user' size={25}/>
        <TextInput 
        placeholder="Email"
        placeholderTextColor={'#000'}
        value={email}
        onChangeText={(text)=>setEmail(text)}
        style={[styles.inputContainer,{marginTop:0}]}
        />
       </View>
       </View>
       <View style={{backgroundColor:'#f0f0f0',borderRadius:20,width:300,marginTop:30}}>
       <View style={[styles.inputViewContainer,{paddingHorizontal:5}]}>
        <Entypo name='lock' size={25}/>
        <TextInput 
        placeholder="password"
        secureTextEntry={!showPassword}
        onChangeText={(text)=>setPassword(text)}
        style={[styles.inputContainer,{marginTop:0}]}
        value={password}/>
        <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
        <Entypo name={showPassword?"eye":'eye-with-line'} size={25} style={{padding:5}}/>
        </TouchableOpacity>
       </View>
       </View>


        <Text style={{fontSize:16,marginTop:10}}>Remember</Text>
        <TouchableOpacity style={[styles.button]}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
    </View>
    )
}
export default Login;

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