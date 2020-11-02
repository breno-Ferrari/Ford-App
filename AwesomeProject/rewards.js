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
    height: '100%'
   
    },
    Botao:{
        width:50,
        marginTop:360,
        marginLeft:380
    }
    
  });


  export default class App extends React.Component {
    render() {
      return (
        <View>
        <ImageBackground
        style={styles.fundo}
        resizeMode="stretch"
        source={{uri:'https://cdn.discordapp.com/attachments/692505323440832615/768859352811175936/Ford_APP_Recompensas.png'}}
        >
            <View style={{flex:1}}>
            <TouchableOpacity style={styles.Botao} onPress={() =>
              this.props.navigation.goBack('Home')} backgroundColor="#FFFFFF">
                <Button  color="pink" title="">
                </Button>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        </View>
    );
    }
  }