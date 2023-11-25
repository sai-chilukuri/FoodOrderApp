import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import ResturantItems from "./components/ResturantDetails";
import OrderSuccessfull from './Screens/OrderSuccessfull';
import Login from './components/Login';
import MyOrders from './components/MyOrders';


export default function RoutingContainer(){
    const Stack=createNativeStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="orders" screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Resturant" component={ResturantItems}/>
            <Stack.Screen name="placeOrder" component={OrderSuccessfull}/>
            <Stack.Screen name="login" component={Login}/> */}
            <Stack.Screen name="orders" component={MyOrders}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
   
}