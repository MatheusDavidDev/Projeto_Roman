import { StatusBar } from 'expo-status-bar';
import React, {Component}  from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import api from '../services/api.js';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';


export default class Cadastro extends Component {
    render(){
        return(
            <View style={styles.main}>
                Cadastro
            </View>
        )
    }
}
  
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center'
    }

});