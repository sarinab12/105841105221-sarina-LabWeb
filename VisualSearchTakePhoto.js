import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const VisualSearchTakePhoto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search by taking a photo</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/15.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraButton}>
          <Image
            source={require('./assets/camera.png')}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Menjaga aspek rasio gambar
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  cameraButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF0000', // Warna merah untuk tombol kamera
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 26,
    height: 26,
    tintColor: '#FFF', // Warna putih untuk ikon kamera
  },
});

export default VisualSearchTakePhoto;
