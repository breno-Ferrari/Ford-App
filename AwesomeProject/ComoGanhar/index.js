import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    StyleSheet,
    View,
    ImageBackground,
  } from 'react-native';

//const {width} = Dimensions.get("window");
//const height =  width 

  const styles = StyleSheet.create({
    fundo:{
      width:'100%',
      height:'100%',
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
  });

  export default class Ofertas extends React.Component {
    render() {
      return (
        <View >
            <View >
              <ImageBackground
                source={require('../img/Ford_APP_Como_Ganhar.png')}
                style={styles.fundo}
                resizeMode='stretch'
              >
            <View style={styles.DivVolta}>
                <TouchableOpacity style={styles.BtnVolta} onPress={() =>
                    this.props.navigation.navigate('PontosIndi')}>
                </TouchableOpacity>
            </View>  
              </ImageBackground>
            </View>
        </View>    
        );
    }
}