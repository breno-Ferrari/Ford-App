import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button
  } from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';



const styles = StyleSheet.create({
  fundo: {
    width: '100%',
    height: 430,


  },
  DivRec: {
   
    position: "absolute",
    width: 192,
    height: 50,
    top: 350,
    right: 32
  },

  BtnTamanho2: {
    width: 192,
    height: 50,


  },

  DivVolta: {
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

  DivAcu: {
    //backgroundColor:"pink",
    position: "absolute",
    width: 192,
    height: 50,
    top: 350,
    right: 255
  },

  BtnAcu: {
    width: 192,
    height: 50,
  },

  exclusivos: {
    marginLeft: 20,
    width: 440,
    height: 683,
  },
  espaço:{
    height:10,
}

});

const images = [
  require('../img/Ford_APP_Acumular_Items.png'),
  require('../img/Ford_APP_Ofertas.png')//barra fundo da tela
]


export default class App extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.fundo}
          resizeMode="stretch"
          source={require('../img/Ford_APP_Recompensas_-_Acumular.png')}
        >

          <View style={styles.DivVolta}>
            <TouchableOpacity style={styles.BtnVolta} onPress={() =>
              this.props.navigation.goBack('Mais')}>
            </TouchableOpacity>
          </View>

          <View style={styles.DivRec}>
            <TouchableOpacity style={styles.BtnTamanho2} onPress={() =>
              this.props.navigation.navigate('RecompensasRes')} >
            </TouchableOpacity>
          </View>

          <View style={styles.DivAcu}>
            <TouchableOpacity style={styles.BtnAcu} onPress={() =>
              this.props.navigation.navigate('Recompensas')} >
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View>
            <Image  style={styles.espaço} source={require('../img/Ford_APP_Ofertas.png')}>
            </Image> 
        </View>
        <ScrollView>
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