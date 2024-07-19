import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginPage from './loginPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/home-aktif.png';
import HomeInaktif from './assets/home-inaktif.png';
import shop from'./assets/shop-aktif.png';
import shopInaktif from'./assets/shop-inaktif.png';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? shop : shopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="login" component={loginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;