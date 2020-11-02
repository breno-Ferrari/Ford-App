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
    height: 480

    },
    DivVolta:{
        position:"absolute",
        width:55,
        height:50,
        top:50,
        left:10
          },

    BtnVolta:{
        width:55,
        height:50,
        
    },

    exclusivos:{
    marginTop:0,
    width:489,
    height:582
    }

  });

  const images=[
    'https://cdn.discordapp.com/attachments/692505323440832615/768862551164715048/Itens_Ford_Pass_Recompensas.png',
    'https://cdn.discordapp.com/attachments/692505323440832615/768871336025260052/Ford_APP_Ofertas.png'
  ]


  export default class App extends React.Component {
    render() {
      return (
        <View>
        <ImageBackground
        style={styles.fundo}
        resizeMode="stretch"
        source={{uri:'https://cdn.discordapp.com/attachments/692505323440832615/768865327151841290/Ford_APP_Recompensas_Exclusivos.png'}}
        >
        <View style={styles.DivVolta}>
            <TouchableOpacity style={styles.BtnVolta} onPress={() =>
              this.props.navigation.goBack('RecompensasRes')}>
            </TouchableOpacity>
        </View> 
        </ImageBackground>
        <ScrollView 
          >
          {
            images.map((image, index)=>(
              <Image
              key={index}
              resizeMode="contain"
              source={{uri:image}}
              style={styles.exclusivos}
           /> 
            ))
           }
           </ScrollView>
          </View>
    );
    }
}
