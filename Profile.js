import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFIL SAYA</Text>
      <View style={styles.profileHeader}>
        <Image source={require('./assets/image.jpg')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>SARINA</Text>
          <Text style={styles.profileEmail}>sarinabina@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.profileItem}>
        <Text style={styles.profileItemText}>My orders</Text>
        <Text style={styles.profileItemSubText}>Already have 12 orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <Text style={styles.profileItemText}>Shipping addresses</Text>
        <Text style={styles.profileItemSubText}>3 addresses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <Text style={styles.profileItemText}>Payment methods</Text>
        <Text style={styles.profileItemSubText}>Visa **34</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <Text style={styles.profileItemText}>Promocodes</Text>
        <Text style={styles.profileItemSubText}>You have special promocodes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <Text style={styles.profileItemText}>My reviews</Text>
        <Text style={styles.profileItemSubText}>Reviews for 4 items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <Text style={styles.profileItemText}>Settings</Text>
        <Text style={styles.profileItemSubText}>Notifications, password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left', 
  },
  profileHeader: {
    flexDirection: 'row',  
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,  
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  profileItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileItemText: {
    fontSize: 18,
  },
  profileItemSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default Profile;
