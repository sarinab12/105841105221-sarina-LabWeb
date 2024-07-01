import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

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

export default function login() {
  const [fontLoaded] = useFonts ({
    MetroBold: require('./assets/fonts/Metropolis-Bold.otf'),
    MetroMedium: require('./assets/fonts/Metropolis-Medium.otf'),
  });

  if (!fontLoaded) {
    return <Text>Font tidak ditemukan</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'MetroBold' }]}>Login</Text>
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />
      <Text style={[styles.forgotPasswordText, { fontFamily: 'MetroMedium' }]}>Forgot your password?</Text>
      <ButtonCustom text="LOGIN" color="red" onPress={() => {}} />
      <Text style={[styles.orText, { fontFamily: 'MetroMedium' }]}>Or login with social account</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/google.jpeg')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/facebook.jpeg')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
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
    fontSize: 29,
    marginBottom: 19,
  },
  textInput: {
    width: 275,
    height: 53,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    paddingLeft: 10,
  },
  forgotPasswordText: {
    alignSelf: 'center',
    marginBottom: 18,
    color: 'gray',
  },
  button: {
    width: 275,
    height: 53,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:16,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 155,
  },
  socialIcon: {
    width: 49,
    height: 49,
    marginHorizontal: 9,
  },
});

