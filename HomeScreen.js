import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/UnguMerah.png')} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Fashion sale</Text>
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newSection}>
        <Text style={styles.newSectionTitle}>New</Text>
        <Text style={styles.newSectionSubtitle}>You've never seen it before!</Text>
        <ScrollView horizontal>
          <Image source={require('./assets/MerahPutih.png')} style={styles.productImage} />
          <Image source={require('./assets/Putih.png')} style={styles.productImage} />
          <Image source={require('./assets/Sepotong.png')} style={styles.productImage} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '90%',
    height: 290,
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 22,
    left: 22,
  },
  headerText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  checkButton: {
    marginTop: 11,
    backgroundColor: 'red',
    paddingVertical: 11,
    paddingHorizontal: 21,
    borderRadius: 6,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 15,
  },
  newSection: {
    padding: 21,
  },
  newSectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  newSectionSubtitle: {
    fontSize: 15,
    color: 'gray',
  },
  productImage: {
    width: 149,
    height: 149,
    marginRight: 11,
  },
});

export default HomeScreen;
