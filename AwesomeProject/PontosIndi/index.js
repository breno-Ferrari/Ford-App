import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
 
  } from 'react-native';


  const styles = StyleSheet.create({
      fundo: {
          width: '100%',
          height: 420
      },
      DivVolta: {
          //backgroundColor:"pink",
          position: "absolute",
          width: 55,
          height: 50,
          top: 50,
          left: 10
      },

      BtnVolta: {
          width: 55,
          height: 50,
      },
    
      exclusivos: {
          marginLeft:25,
          width: 430,
          height: 600,
      },
      espaço:{
          height:10,
      },
      DivGanhar:{
      position:"absolute",
      //backgroundColor:"pink",
      width:200,
      height:35,
      top:368,
      right:140
      
      },
      btnGanhar:{
        width:200,
        height:40,
      },
      fundoView:{
        height:500,
        width:500,
        backgroundColor:"#FFFF",
      }


  });

  const images=[
    require('../img/Ford_APP_Indicacoes_Items_pontos.png'),
    require('../img/Ford_APP_Ofertas.png')//barra fundo da tela
  ]
  // const [color, changeColor] = useState("#fff");

  export default class App extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.fundo}
          resizeMode="stretch"
          source={require('../img/Ford_APP_Indicacoes_Topo.png')}
        >
         
          <View style={styles.DivVolta}>
            <TouchableOpacity style={styles.BtnVolta} onPress={() =>
              this.props.navigation.navigate('Mais')}>
            </TouchableOpacity>
          </View>  
          
          <View style={styles.DivGanhar}>
            <TouchableOpacity style={styles.btnGanhar} onPress={() =>
              this.props.navigation.navigate('ComoGanhar')}>
            </TouchableOpacity>
          </View>  
        </ImageBackground>

       
        <View>
            <Image  style={styles.espaço} source={require('../img/Ford_APP_Ofertas.png')}>
            </Image> 
        </View>
          
        <ScrollView 
        >
          {
            images.map((image, index) => (
              <Image
                key={index}
                resizeMode="stretch"
                source={image}
                style={styles.exclusivos}
              />
            ))
          }
         </ScrollView>
        
      </View>
    );
  }
}
