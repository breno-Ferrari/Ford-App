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


  const styles = StyleSheet.create({
    fundo: {
      width: '100%',
      height: 489
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

    BtnVolta: {
      width: 55,
      height: 50,
    },

    DivEx: {
      position: "absolute",
      width: 130,
      height: 50,
      top: 410,
      left: 30,
    },

    BtnEx: {
      width: 130,
      height: 50,
    },

    exclusivos: {
      marginLeft: 20,
      width: 440,
      height: 485,
    }

  });

  const images=[
    require('../img/Itens_Ford_Pass_Recompensas.png'),
    require('../img/Itens_Ford_Pass_Recompensas2.png'),
    require('../img/Ford_APP_Ofertas.png')//barra fundo da tela
  ]


  export default class App extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.fundo}
          resizeMode="stretch"
          source={require('../img/Ford_APP_Recompensas_Exclusivos.png')}
        >
          {/* Botão volta Mais */}
          <View style={styles.DivVolta}>
            <TouchableOpacity style={styles.BtnVolta} onPress={() =>
              this.props.navigation.navigate('Mais')}>
            </TouchableOpacity>
          </View>
          {/* Botão vai para acumular */}
          <View style={styles.DivAcu}>
            <TouchableOpacity style={styles.BtnAcu} onPress={() =>
              this.props.navigation.navigate('RecompensasAcu')}>
            </TouchableOpacity>
          </View>
          {/* Botão resgatar */}
          <View style={styles.DivRec}>
            <TouchableOpacity style={styles.BtnTamanho2} onPress={() =>
              this.props.navigation.navigate('Recompensas')} >
            </TouchableOpacity>
          </View>

          {/* Botão fecha exclusivos */}
          <View style={styles.DivEx}>
            <TouchableOpacity style={styles.BtnEx} onPress={() =>
              this.props.navigation.navigate('RecompensasRes')} >
            </TouchableOpacity>
          </View>

        </ImageBackground>
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
