
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button,

  } from 'react-native';
import database from '@react-native-firebase/database';




//const {width} = Dimensions.get("window");
//const height =width *100/60;
 var images=[
'https://cdn.discordapp.com/attachments/692505323440832615/771205269903507496/Bom_dia.png',
'https://cdn.discordapp.com/attachments/692505323440832615/771205311812993034/Encontre.png',
]


database()
  .ref('/flag')
  .on('value', snapshot => {
    
    if(snapshot.val()==1){

    
    images.push('https://cdn.discordapp.com/attachments/692505323440832615/770802402352693258/Proximo_Veiculo.png')
    }
    });

    
    

const styles = StyleSheet.create({
  fundo: {

    width: '100%', 
    height: '100%'
 
  },
  carrosel: {
    width:200,
    height:330,
      },

  DivMais:{
    position:"absolute",
    width:60,
    height:50,
    top:885,
    left:400,
    //backgroundColor:"pink"
      },

      BtnVolta:{
        width:60,
        height:50,
    
      },

      DivCarrosel:{

        position:"absolute",
          width:500,
          height:330,
          top:520,
          //backgroundColor:"pink"
          },



  
});

export default class Home extends React.Component {

  render() {
    
    return (
      
      <View >
          
        <ImageBackground
          style={styles.fundo}
          resizeMode="stretch"
          source={{uri:'https://cdn.discordapp.com/attachments/692505323440832615/766164911830728714/Ford_APP_Teste2.png'}}
        >
          {/* <Button title="" onClick={someMethod}>Click to reload!</Button> */}
          <View style={styles.DivCarrosel}>
          <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          >
          {
            images.map((image, index)=>(
                <TouchableOpacity  onPress={() =>
                    this.props.navigation.navigate('Ofertas')}>
                      <Image
                        key={index}
                        resizeMode="contain"
                        source={{uri:image}}
                        style={styles.carrosel}
                        /> 
                  </TouchableOpacity>
            ))
           }
           </ScrollView>
           </View>
           <View style={styles.DivMais}>
          <TouchableOpacity style={styles.BtnVolta} onPress={() =>
              this.props.navigation.navigate('Mais')}>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
}