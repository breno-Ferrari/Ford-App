import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Button

  } from 'react-native';

//const {width} = Dimensions.get("window");
//const height =  width 

  const styles = StyleSheet.create({
    icon:{
      width:'100%',
      height:'100%',
    },
    ViewVoltaInicio:{
      position:"absolute",
      width:60,
      height:55,
      left:20,
      bottom:5,
    } ,
 
    BtnTamanho1:{
      width:60,
      height:55,


    },
    Recom:{
      position:"absolute",
      width:"100%",
      height:75,
      top:390,
      }, 

    BtnTamanho2:{
      width:"100%",
      height:75,


    },

  });




  export default class Ofertas extends React.Component {
    render() {
      return (
            <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
              <ImageBackground
                source={{uri:'https://cdn.discordapp.com/attachments/692505323440832615/771816852879179836/Ford_APP_Mais.png'}}
                style={styles.icon}
                resizeMode='stretch'
              >
           <View style={styles.ViewVoltaInicio}>
              <TouchableOpacity style={styles.BtnTamanho1}
                  onPress={() => 
                        this.props.navigation.goBack('Home')}>
              </TouchableOpacity>
            </View>

            <View style={styles.Recom}>
              <TouchableOpacity style={styles.BtnTamanho2}
                  onPress={() => 
                        this.props.navigation.navigate('Recompensas')}>
              </TouchableOpacity>
            </View> 
              </ImageBackground>
            </View>
                    );
    }
}