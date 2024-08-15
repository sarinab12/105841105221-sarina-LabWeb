import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const katalog1 = () => {
  const categories = ['T-shirt', 'Blouse', 'Dress', 'Crop Tops'];
  const [products, setProducts] = useState([
    {
      name: 'Casual T-shirt',
      image: require('./assets/6.png'),
      color: 'Brown',
      size: 'M',
      price: 25,
      rating: 4,
      ratingCount: 12,
      loved: false,
    },
    {
      name: 'Summer Blouse',
      image: require('./assets/7.png'),
      color: 'Pink',
      size: 'L',
      price: 52,
      rating: 5,
      ratingCount: 18,
      loved: false,
    },
    {
      name: 'T-shirt',
      image: require('./assets/8.png'),
      color: 'Black',
      size: 'L',
      price: 80,
      rating: 5,
      ratingCount: 42,
      loved: false,
    },
    {
      name: 'Party Dress',
      image: require('./assets/9.png'),
      color: 'Green',
      size: 'L',
      price: 21,
      rating: 3,
      ratingCount: 28,
      loved: false,
    },
  ]);

  const renderStars = (rating, ratingCount) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? require('./assets/bintang-aktif.png') : require('./assets/bintang-inactif.png')}
          style={styles.starIcon}
        />
      );
    }
    stars.push(
      <Text key="ratingCount" style={styles.ratingText}>
        ({ratingCount})
      </Text>
    );
    return stars;
  };

  const toggleLove = (index) => {
    const newProducts = [...products];
    newProducts[index].loved = !newProducts[index].loved;
    setProducts(newProducts);
  };

  const sortProductsByPrice = (ascending) => {
    const sortedProducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Women Tops</Text>
        <Image source={require('./assets/4.png')} style={styles.searchIcon} />
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterText}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(false)}>
          <Text style={styles.filterText}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productColor}>Color: {item.color}</Text>
              <Text style={styles.productSize}>Size: {item.size}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(item.rating, item.ratingCount)}
              </View>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
              <Image source={item.loved ? require('./assets/favorites-activated.png') : require('./assets/favorites-inactive.png')} style={styles.loveIcon} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    zIndex: 1,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    marginHorizontal: 8,
    borderRadius: 18,
  },
  categoryText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  filterText: {
    fontSize: 14,
  },
  productList: {
    marginTop: 8,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 90,
    height: 90,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productColor: {
    fontSize: 14,
    color: '#777',
  },
  productSize: {
    fontSize: 14,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  starIcon: {
    width: 18,
    height: 18,
  },
  ratingText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loveButton: {
    padding: 8,
  },
  loveIcon: {
    width: 28,
    height: 28,
  },
});

export default katalog1;
