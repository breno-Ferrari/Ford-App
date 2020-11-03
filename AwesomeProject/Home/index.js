
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
  require('../img/Bom_dia.png'),
  require('../img/Encontre.png'),
 ]

database()
  .ref('/flag')
  .on('value', snapshot => {
    
    if(snapshot.val()==1){

    
    images.push(require('../img/Proximo_Veiculo.png'))
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
          source={require('../img/Ford_APP_Teste2.png')}
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
                        source={image}
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