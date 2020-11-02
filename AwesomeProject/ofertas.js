import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
    ImageBackground
  } from 'react-native';

//const {width} = Dimensions.get("window");
//const height =width 

  const styles = StyleSheet.create({
    icon:{
      width:'100%',
      height:'100%',
      
      
      //alignSelf:'center',
      
       
    },
    
    ofertas:{
    width:486,
    height:1053,
    marginTop:-60,
    marginRight:-2,
    marginLeft:-3,
    
  //alignContent:'center'
      },
  });

const images=[

    'https://cdn.discordapp.com/attachments/692505323440832615/770795802854424607/Ford_APP_Ofertas_-_Edge_V2.png',
    'https://cdn.discordapp.com/attachments/692505323440832615/770795830588080168/Ford_APP_Ofertas_-_Mustang_V2.png',
    'https://cdn.discordapp.com/attachments/692505323440832615/767596117407563796/Ford_APP_Ofertas_-_Raptor.png'
]
  export default class App extends React.Component {
    render() {
      return (
        <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
            <ImageBackground
            source={{uri:'https://cdn.discordapp.com/attachments/692505323440832615/768299580659204136/Ford_APP_Ofertas.png'}}
            style={styles.icon}
            resizeMode='stretch'
            >
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
                source={{uri:image}}
                style={styles.ofertas}
                /> 
                
              ))
             
            }
             
            </ScrollView>
            </ImageBackground>
        </View>    
        );
    }
}
  
