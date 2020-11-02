import React,{Component} from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'



import Ofertas from './Ofertas';
import Home from './Home';
 import Mais from './Mais';
 import Recompensas from './Recompensas';
import RecompensasRes from './RecompensasRes';
import RecompensasEx from './RecompensasEx';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer >

      <Stack.Navigator initialRouteName = "Home" headerMode ="none"  screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ofertas" component={Ofertas}/> 
        <Stack.Screen name="Mais" component={Mais} />
        <Stack.Screen name="Recompensas" component={Recompensas} options={{animationEnabled: false}}/> 
       <Stack.Screen name="RecompensasRes" component={RecompensasRes} options={{animationEnabled: false}} />
        <Stack.Screen name="RecompensasEx" component={RecompensasEx} options={{animationEnabled: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}