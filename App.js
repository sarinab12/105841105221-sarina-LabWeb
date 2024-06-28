
import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

const  App = ()  => {
  const [fontloaded] = useFonts({
    MetroBlack: require('./assets/fonts/Metropolis-Black.otf'),
    MetroBold : require('./assets/fonts/Metropolis-Bold.otf'),
    MetroLigth: require('./assets/fonts/Metropolis-Light.otf'),
    MetroSemiBold: require('./assets/fonts/Metropolis-SemiBold.otf'),
  });
  if(!fontloaded){
    return<Text>font tidak ditemukan</Text>
  }
  return(
    <View style={{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
    }}>
      <Text style={{
        fontFamily:"MetroBlack",
        fontSize:  30,
      }}>Font metropolis Black</Text>
       <Text style={{
        fontFamily:"MetroBold",
        fontSize:  30,
      }}>Font metropolis Bold</Text>
       <Text style={{
        fontFamily:"MetroLight'",
        fontSize:30,
      }}>Font metropolis light</Text>
       <Text style={{
        fontFamily:"MetroSemiBold'",
        fontSize:30,
      }}>Font metropolis  semibold</Text>
    </View>
  )
}
export  default  App
