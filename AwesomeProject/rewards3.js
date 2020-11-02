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
    height: 500
    
    },
    Botao:{
        width:40, 
        marginTop:430,
        marginLeft:130
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
             <View style={{flex:1}}>
            <TouchableOpacity style={styles.Botao} onPress={() =>
              this.props.navigation.goBack('Home')} backgroundColor="#FFFFFF">
                <Button  color="pink" title="">
                </Button>
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
           <View style={{width:'100%',height:100,backgroundColor:"white"}}>

           </View>
           </View>
        
        
    );
    }
  }