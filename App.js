import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; 
import ShopScreen from './ShopScreen';
import loginPage from './loginPage';
import Profile from './Profile';
import HomeAktif from './assets/home-aktif.png';
import HomeInaktif from './assets/home-inaktif.png';
import Shop from './assets/shop-aktif.png';
import ShopInaktif from './assets/shop-inaktif.png';
import BagAktif from './assets/bag-activated.png';
import BagInaktif from './assets/bag-inactive.png';
import FavoriteAktif from './assets/favorites-activated.png';
import FavoriteInaktif from './assets/favorites-inactive.png';
import ProfilAktif from './assets/profil-activated.png';
import ProfilInaktif from './assets/profil-inactive.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : BagInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavoriteAktif : FavoriteInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfilAktif : ProfilInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
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
