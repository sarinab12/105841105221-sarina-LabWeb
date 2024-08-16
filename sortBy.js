import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView, Modal,
} from 'react-native';

const sortBy = () => {
  const categories = ['T-shirts', 'Crop tops', 'Blouses', 'Dresses'];
  const [products, setProducts] = useState([
    {
      name: 'T-Shirt SPANISH',
      image: require('./assets/10.png'),
      price: 95,
      rating: 5,
      ratingCount: 11,
      loved: false,
      sale: false,
    },
    {
      name: 'Blouse',
      image: require('./assets/11.png'),
      originalPrice: 215,
      price: 145,
      rating: 5,
      ratingCount: 16,
      loved: false,
      sale: true,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Sort by');

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

  const sortProductsByOption = (option) => {
    switch (option) {
      case 'Popular':
        break;
      case 'Newest':
        break;
      case 'Customer Review':
        break;
      case 'Price: lowest to high':
        sortProductsByPrice(true);
        break;
      case 'Price: highest to low':
        sortProductsByPrice(false);
        break;
      default:
        break;
    }
    setSelectedSortOption(option);
    setModalVisible(false);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        {item.sale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleText}>SALE</Text>
          </View>
        )}
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(item.rating, item.ratingCount)}
        </View>
        {item.sale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
            <Text style={styles.salePrice}>${item.price}</Text>
          </View>
        ) : (
          <Text style={styles.productPrice}>${item.price}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
        <Image
          source={item.loved ? require('./assets/favorites-activated.png') : require('./assets/favorites-inactive.png')}
          style={styles.loveIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Women's tops</Text>
        <Image source={require('./assets/search.png')} style={styles.searchIcon} />
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.filterText}>{selectedSortOption}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.productList}
      />

      {/* Modal for Sort By */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by</Text>
            <TouchableOpacity onPress={() => sortProductsByOption('Popular')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Popular' && styles.selectedOption]}>
                Popular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Newest')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Newest' && styles.selectedOption]}>
                Newest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Customer Review')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Customer Review' && styles.selectedOption]}>
                Customer Review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Price: lowest to high')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Price: lowest to high' && styles.selectedOption]}>
                Price: lowest to high
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Price: highest to low')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Price: highest to low' && styles.selectedOption]}>
                Price: highest to low
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  categoryButton: {
    backgroundColor: 'black',
    marginHorizontal: 8,
    borderRadius: 18,
    padding: 8,
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
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
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    margin: 8,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  saleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productDetails: {
    paddingVertical: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  ratingText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  salePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loveButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  loveIcon: {
    width: 28,
    height: 28,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 8,
  },
  selectedOption: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default sortBy;
