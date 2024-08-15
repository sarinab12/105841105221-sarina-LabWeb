import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FindingResults = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/search.png')}
        style={styles.searchIcon}
      />
      <Text style={styles.text}>Finding similar results...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  searchIcon: {
    width: 50,
    height: 50,
    tintColor: '#FF0000', 
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', 
  },
});

export default FindingResults;