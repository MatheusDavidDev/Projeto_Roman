import { StatusBar } from 'expo-status-bar';
import React, {Component}  from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import api from '../services/api.js';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';


export default class Projetos extends Component {
    constructor(props){
      super(props)
      this.state={
        listaProjetos: []
      }
    }
  
    async loadFonts() {
      await Font.loadAsync({
        'Roboto-Light': {
          uri: require('../../assets/fonts/Roboto-Light.ttf'),
          display: Font.FontDisplay.FALLBACK,
        },
        'Roboto-Thin': {
          uri: require('../../assets/fonts/Roboto-Thin.ttf'),
          display: Font.FontDisplay.FALLBACK,
        },
      })
    }
  
    buscarProjetos = async () => {
      const resposta = await api.get('/projeto')
      this.setState({listaProjetos: resposta.data})
      console.warn(this.state.listaProjetos)
    }
  
    componentDidMount(){
      this.buscarProjetos()
      this.loadFonts()
    }
  
    render(){
      return (
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <View style={styles.mainHeaderRow}>
              <Image
                source={require('../../assets/img/lista-titulo.png')}
                style={styles.mainHeaderImg}
              />
              <Text style={styles.mainHeaderText}>Projetos</Text>
            </View>
            <LinearGradient
              colors={['rgb(56, 179, 232)','rgb(114, 222, 101)','rgb(242, 233, 99)']}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              style={styles.mainHeaderLine}
            />
          </View>
  
          <View style={styles.mainBody}>
            <FlatList
              contentContainerStyle={styles.mainBodyContent}
              data={this.state.listaProjetos}
              keyExtractor={item => item.idProjeto}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    }
  
    renderItem = ({item}) => (
      <View style={styles.flatItemRow}>
        <View style={styles.flatItemContainer}>
          <Text style={styles.flatItemInfoTitulo}>{item.titulo}</Text>
          <Text style={styles.flatItemInfoTema}>{item.idTemaNavigation.tema1}</Text>
          <Text style={styles.flatItemInfoNome}>{item.idUsuarioNavigation.nome}</Text>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    // cabeçalho
    mainHeader : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'blue'
    },
    mainHeaderRow: {
      flexDirection: 'row',
    },
    // imagem do cabeçalho
    mainHeaderImg: {
      width: 25,
      height: 25,
      marginLeft: -25,
      marginTop: 10,
      marginRight: 10
    },
    // texto do cabeçalho
    mainHeaderText: {
      fontSize: 30,
      fontFamily: 'Roboto-Thin',
      marginBottom: 5
    },
    // linha de separação do cabeçalho
    mainHeaderLine: {
      width: 165,
      paddingTop: 2
    },
  
    // conteúdo do body
    mainBody: {
      flex: 4,
      // backgroundColor: 'red'
    },
    // conteúdo da lista
    mainBodyContent: {
      paddingTop: 5,
      paddingRight: 50,
      paddingLeft: 50
    },
    flatItemRow: {
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderBottomColor: '#72DE65',
      marginTop: 30
    },
    
    flatItemContainer: {
      flex: 1
    },
    
  
    flatItemInfoTitulo: {
      fontSize: 20,
      lineHeight: 20,
      fontFamily: 'Roboto-Thin'
    },
  
    flatItemInfoTema: {
      fontSize: 15,
      fontFamily: 'Roboto-Light',
      marginTop: 10
    },
  
    flatItemInfoNome: {
      fontSize: 15,
      fontFamily: 'Roboto-Light',
      marginLeft: 200,
      marginBottom: 5,
      marginTop: -18
    }
  
  });