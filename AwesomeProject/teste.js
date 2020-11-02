import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Button
  } from 'react-native';

//const {width} = Dimensions.get("window");
//const height =width 

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
    BotaoMais:{
    width:50,
    marginTop:70,
    marginLeft:20,
      }
  });

const images=[

    'https://cdn.discordapp.com/attachments/692505323440832615/767596037363728445/Ford_APP_Ofertas_-_Edge.png',
    'https://cdn.discordapp.com/attachments/692505323440832615/767596075476451398/Ford_APP_Ofertas_-_Mustang.png',
    'https://cdn.discordapp.com/attachments/692505323440832615/767596117407563796/Ford_APP_Ofertas_-_Raptor.png'
]
  export default class App extends React.Component {
    render() {
      return (
        <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
            <View style={{backgroundColor:'white',width:'100%',height:'30%',marginTop:-30}}>
            <ImageBackground
            source={{uri:'https://cdn.discordapp.com/attachments/692505323440832615/768326060462047242/Ford_APP_Ofertas_2.png'}}
            style={styles.icon}
            resizeMode='stretch'
            >
               <View style={{flex:1}}>
            <TouchableOpacity style={styles.BotaoMais} onPress={() =>
              this.props.navigation.goBack('Home')} backgroundColor="#FFFFFF">
                <Button  color="pink" title="">
                </Button>
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
                source={{uri:image}}
                style={styles.ofertas}
                /> 
                
              ))
             
            }
             
            </ScrollView>
        </View>    
        );
    }
}
  
