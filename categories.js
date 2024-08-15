import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section with Back Arrow and Categories */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          {/* Back Arrow */}
          <TouchableOpacity onPress={() => navigation.navigate('Category2')} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>categories</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Image source={require('./assets/4.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>

        {/* Category Tabs */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Women</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Summer Sales Section */}
      <ScrollView>
        <TouchableOpacity style={styles.salesContainer}>
          <Text style={styles.salesText}>SUMMER SALES</Text>
          <Text style={styles.salesSubText}>Up to 50% off</Text>
        </TouchableOpacity>

        {/* Other categories */}
        <View style={styles.categoryList}>
          <TouchableOpacity style={styles.categoryItemList}>
            <View style={styles.categoryLabelContainer}>
              <Text style={styles.categoryLabel}>New</Text>
              <Text style={styles.arrow}>{' => '}</Text> {/* Changed arrow */}
            </View>
            <Image source={require('./assets/1.png')} style={styles.categoryImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItemList}>
            <View style={styles.categoryLabelContainer}>
              <Text style={styles.categoryLabel}>Clothes</Text>
              <Text style={styles.arrow}>{' => '}</Text> {/* Changed arrow */}
            </View>
            <Image source={require('./assets/Gambar3.png')} style={styles.categoryImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItemList}>
            <View style={styles.categoryLabelContainer}>
              <Text style={styles.categoryLabel}>Shoes</Text>
              <Text style={styles.arrow}>{' => '}</Text> {/* Changed arrow */}
            </View>
            <Image source={require('./assets/Gambar4.png')} style={styles.categoryImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItemList}>
            <View style={styles.categoryLabelContainer}>
              <Text style={styles.categoryLabel}>Accessories</Text>
              <Text style={styles.arrow}>{' => '}</Text> {/* Changed arrow */}
            </View>
            <Image source={require('./assets/Gambar5.png')} style={styles.categoryImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles for the Categories screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FFFFFF',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    paddingRight: 8,
  },
  backArrow: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'center', // Center the title in the header
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888888',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333333',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  underline: {
    marginTop: 4,
    height: 2,
    backgroundColor: 'red',
    width: '100%',
  },
  salesContainer: {
    backgroundColor: 'red',
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  salesText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  salesSubText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
  categoryList: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  categoryItemList: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginRight: 8, // Add space between text and arrow
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  arrow: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
});

export default categories;
