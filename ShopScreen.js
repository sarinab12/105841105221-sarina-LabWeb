import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ShopScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('categories'); // Navigasi ke ShopSc
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('./assets/CewekCool.png')} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Street clothes</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.clickableArrow}></Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sale Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sale</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <Text style={styles.sectionSubtitle}>Super summer sale</Text>
        <ScrollView horizontal>
          <View style={styles.productContainer}>
            <Image source={require('./assets/Pink.png')} style={styles.productImage} />
            <Text style={styles.productName}>Evening Dress</Text>
            <Text style={styles.productOldPrice}>$155</Text>
            <Text style={styles.productNewPrice}>$125</Text>
          </View>
          <View style={styles.productContainer}>
            <Image source={require('./assets/Abu.png')} style={styles.productImage} />
            <Text style={styles.productName}>Sport Dress</Text>
            <Text style={styles.productOldPrice}>$225</Text>
            <Text style={styles.productNewPrice}>$193</Text>
          </View>
          <View style={styles.productContainer}>
            <Image source={require('./assets/Pirang.png')} style={styles.productImage} />
            <Text style={styles.productName}>Sport Dress</Text>
            <Text style={styles.productOldPrice}>$235</Text>
            <Text style={styles.productNewPrice}>$193</Text>
          </View>
        </ScrollView>
      </View>

      {/* New Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <Text style={styles.sectionSubtitle}>You've never seen it before!</Text>
        <ScrollView horizontal>
          <View style={styles.productContainer}>
            <Image source={require('./assets/MerahPutih.png')} style={styles.productImage} />
            <Text style={styles.productName}>New Dress</Text>
            <Text style={styles.productPrice}>$145</Text>
          </View>
          <View style={styles.productContainer}>
            <Image source={require('./assets/Putih.png')} style={styles.productImage} />
            <Text style={styles.productName}>New Dress</Text>
            <Text style={styles.productPrice}>$150</Text>
          </View>
          <View style={styles.productContainer}>
            <Image source={require('./assets/Sepotong.png')} style={styles.productImage} />
            <Text style={styles.productName}>New Dress</Text>
            <Text style={styles.productPrice}>$150</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 300,
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  clickableArrow: {
    fontSize: 24,
    color: 'red',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: 'red',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  productContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 150,
    height: 150,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productOldPrice: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  productNewPrice: {
    fontSize: 16,
    color: 'red',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ShopScreen;
