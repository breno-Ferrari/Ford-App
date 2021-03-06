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
      height: '100%',


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

  });


  export default class Recompensas extends React.Component {
    render() {
      return (
        <View>
          <ImageBackground
            style={styles.fundo}
            resizeMode="stretch"
            source={require('../img/Ford_APP_Recompensas.png')}
          >
            {/* botão volta mais */}
            <View style={styles.DivVolta}>
              <TouchableOpacity style={styles.BtnVolta} onPress={() =>
                this.props.navigation.goBack('Mais')}>
              </TouchableOpacity>
            </View>
            {/* botão resgatar */}
            <View style={styles.DivRec}>
              <TouchableOpacity style={styles.BtnTamanho2} onPress={() =>
                this.props.navigation.navigate('RecompensasRes')} >
              </TouchableOpacity>
            </View>
            {/* botão acumular */}
            <View style={styles.DivAcu}>
              <TouchableOpacity style={styles.BtnAcu} onPress={() =>
                this.props.navigation.navigate('RecompensasAcu')} >
              </TouchableOpacity>
            </View>


          </ImageBackground>
        </View>
      );
    }
  }