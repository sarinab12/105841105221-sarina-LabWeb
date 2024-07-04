import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const ButtonCustom = ({ text, color,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const TextInputCustom = ({ placeholder, color, typeKeyboard, secureTextEntry }) => {
  return (
    <TextInput
      keyboardType={typeKeyboard}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.textInput, { borderColor: color }]}
    />
  );
};

export default function forgotpassword () {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        MetroBold: require('./assets/fonts/Metropolis-Bold.otf'),
        MetroMedium: require('./assets/fonts/Metropolis-Medium.otf'),
    });
    if (!fontLoaded) {
        return <Text>Font tidak di temukan</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title,{ fontFamily:'MetroBold'}]}>Forgot Password</Text>
            <Text style={[styles.instructionText, { fontFamily: 'MetroMedium' }]}>
             Please, enter your email address. You will receive a link to create a new password via email.
            </Text>
            <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
            <Text style={[styles.errorText, { fontFamily: 'MetroMedium' }]}>
             Not a valid email address. Should be your@email.com
            </Text>
            <ButtonCustom text="SEND" color="red" onPress={() => navigation.navigate('forgetpassword')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: 'white',
    },
    title: {
      fontSize: 28,
      marginBottom: 20,
    },
    textInput: {
      width: 267,
      height: 45,
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 19,
      paddingLeft: 11,
    },
    forgotPasswordText: {
      alignSelf: 'center',
      marginBottom: 20,
      color: 'gray',
    },
    button: {
      width: 267,
      height: 45,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:15,
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    orText: {
      fontSize: 17,
      color: 'gray',
      marginBottom: 22,
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: 125,
    },
    socialIcon: {
      width: 30,
      height: 30,
      marginHorizontal: 11,
    },
  });
  
  