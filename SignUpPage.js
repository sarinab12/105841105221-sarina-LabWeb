import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

// Komponen kustom, ButtonCustom
const ButtonCustom = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

// Komponen kustom, TextInputCustom
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

export default function SignUp() {
  const navigation = useNavigation();
  const [fontLoaded] = useFonts({
    MetroBold: require('./assets/fonts/Metropolis-Bold.otf'),
    MetroMedium: require('./assets/fonts/Metropolis-Medium.otf'),
  });

  if (!fontLoaded) {
    return <Text>Font tidak ditemukan</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'MetroBold' }]}>Sign up</Text>
      <TextInputCustom placeholder="Name" color="gray" typeKeyboard="default" />
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
      <Text style={[styles.alreadyAccountText, { fontFamily: 'MetroMedium' }]}>Already have an account?</Text>
      </TouchableOpacity>
      <ButtonCustom text="SIGN UP" color="red" onPress={() => navigation.navigate('login')} />
      <Text style={[styles.orText, { fontFamily: 'MetroMedium' }]}>Or sign up with social account</Text>
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
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 29,
    marginBottom: 19,
  },
  textInput: {
    width: 265,
    height: 53,
    borderWidth: 1,
    borderRadius: 11,
    marginBottom: 17,
    paddingLeft: 11,
  },
  alreadyAccountText: {
    alignSelf: 'center',
    marginRight: 29,
    marginBottom: 21,
    color: 'gray',
  },
  button: {
    width: 265,
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 21,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 153,
  },
  socialIcon: {
    width: 56,
    height:56,
    marginHorizontal: 10,
  },
});

