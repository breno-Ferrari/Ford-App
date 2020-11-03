import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
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
    
    ofertas:{
    width:486,
    height:1053,
    marginTop:-320,
    marginRight:-2,
    marginLeft:-3,
      },

    VoltaHome:{
    width:50,
    marginTop:100,
    marginLeft:20,
      },
  });

var images=[

    require('../img/Ford_APP_Ofertas_-_Edge_V2.png'),
    require('../img/Ford_APP_Ofertas_-_Mustang_V2.png'),
    require('../img/Ford_APP_Ofertas_-_Raptor.png')

]
  export default class Ofertas extends React.Component {
    render() {
      return (
        <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
            <View style={{backgroundColor:'white',width:'100%',height:'30%',marginTop:-30}}>
              <ImageBackground
                source={require('../img/Ford_APP_Ofertas_2.png')}
                style={styles.icon}
                resizeMode='stretch'
              >
            <View style={{flex:1}}>
              <TouchableOpacity style={styles.VoltaHome} onPress={() => 
                this.props.navigation.goBack('Home')}>
              </TouchableOpacity>
            </View> 
              </ImageBackground>
                </View>
            <ScrollView
            pagingEnabled 
            horizontal
            showsHorizontalScrollIndicator={true}
            //style={{width:'100%',height:'100%'}}
            >
            {
              images.map((image, index)=>(
                <Image
                key={index}
                resizeMode='stretch'
                source={image}
                style={styles.ofertas}
                /> 
                
              ))
             
            }
             
            </ScrollView>
        </View>    
        );
    }
}