// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginPage from './loginPage';
import SignUpPage from './SignUpPage';
import forgetpasswordPage from './forgetpasswordPage';


function HomeScreen(navigation) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Ke Halaman Login" onPress={() => navigation.navigate('Login')}/>
      <Button title="Ke Halaman SignUp" onPress={() => navigation.navigate('SignUp')}/>
      <Button title="Ke Halaman forget" onPress={() => navigation.navigate('forgetpassword')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="login" component={loginPage} />
        <Stack.Screen name="forgetpassword" component={forgetpasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;