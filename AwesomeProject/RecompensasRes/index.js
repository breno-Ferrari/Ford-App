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
 
    DivVolta:{
        position:"absolute",
        width:55,
        height:50,
        top:50,
        left:10,
    },

    BtnVolta:{
        width:55,
        height:50,
        
    },

    DivEx:{
        position:"absolute",
        width:130,
        height:50,
        top:410,
        left:30,

    },
    BtnEx:{
        width:130,
        height:50,
    }

  });


  export default class App extends React.Component {
    render() {
      return (
        <View>
        <ImageBackground
        style={styles.fundo}
        resizeMode="stretch"
        source={{uri:'https://cdn.discordapp.com/attachments/692505323440832615/768856934224625744/Ford_APP_Recompensas_Resgatar.png'}}
        >
            <View style={styles.DivVolta}>
                <TouchableOpacity style={styles.BtnVolta} onPress={() =>
                    this.props.navigation.navigate('Mais')} >
                </TouchableOpacity>
            </View>
            <View style={styles.DivEx}>
                <TouchableOpacity style={styles.BtnEx} onPress={() =>
                    this.props.navigation.navigate('RecompensasEx')} >
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    );
    }
  }