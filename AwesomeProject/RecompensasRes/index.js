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
      height: "100%"

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
      left: 10,
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

  });


  export default class App extends React.Component {
    render() {
      return (
        <View>
          <ImageBackground
            style={styles.fundo}
            resizeMode="stretch"
            source={require('../img/Ford_APP_Recompensas_Resgatar.png')}
          >
            {/* botão voltar */}
            <View style={styles.DivVolta}>
              <TouchableOpacity style={styles.BtnVolta} onPress={() =>
                this.props.navigation.navigate('Mais')} >
              </TouchableOpacity>
            </View>

            {/* Botão do exclusivos */}
            <View style={styles.DivEx}>
              <TouchableOpacity style={styles.BtnEx} onPress={() =>
                this.props.navigation.navigate('RecompensasEx')} >
              </TouchableOpacity>
            </View>

            {/* Botão volta Recompensas */}
            <View style={styles.DivRec}>
              <TouchableOpacity style={styles.BtnTamanho2} onPress={() =>
                this.props.navigation.navigate('Recompensas')} >
              </TouchableOpacity>
            </View>

            {/* Botão acumular */}
            <View style={styles.DivAcu}>
              <TouchableOpacity style={styles.BtnAcu} onPress={() =>
                this.props.navigation.navigate('RecompensasAcu')}>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
      );
    }
  }