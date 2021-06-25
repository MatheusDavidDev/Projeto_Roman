import { StatusBar } from 'expo-status-bar';
import React, {Component}  from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Projetos from './src/screens/listarProjetos';
import Perfil from './src/screens/perfil';
import Cadastro from './src/screens/cadastro';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default class App extends Component{

  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Projetos" component={Projetos} />
          <Tab.Screen name="Perfil" component={Perfil}/>
          <Tab.Screen name="Cadastro" component={Cadastro}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

