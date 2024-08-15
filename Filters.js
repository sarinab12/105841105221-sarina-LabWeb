import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, PanResponder, Animated } from 'react-native';

const Filters = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const colors = ['#000000', '#FFFFFF', '#0000FF', '#FF0000', '#8B4513', '#FFC0CB', '#808080', '#008000', '#FFFF00'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Men', 'Kids', 'Boys', 'Girls'];
  const brands = ['Adidas', 'Jack & Jones', 'Nike', 'Dior', 'Planet Surf', 'Uniqlo'];

  const minPrice = 0;
  const maxPrice = 300;
  const rangeWidth = 320; 

  const minPriceAnimation = useRef(new Animated.Value(0)).current;
  const maxPriceAnimation = useRef(new Animated.Value(rangeWidth)).current;

  const updatePriceRange = () => {
    minPriceAnimation.addListener(({ value }) => {
      const min = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((maxPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });

    maxPriceAnimation.addListener(({ value }) => {
      const min = Math.round((minPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });
  };

  const panResponderMin = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMin = Math.max(0, Math.min(rangeWidth, gestureState.moveX));
        minPriceAnimation.setValue(newMin);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const panResponderMax = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMax = Math.max(minPriceAnimation._value, Math.min(rangeWidth, gestureState.moveX));
        maxPriceAnimation.setValue(newMax);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const discardFilters = () => {
    setSelectedPriceRange([minPrice, maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory('All');
    setSelectedBrands([]);
  };

  const applyFilters = () => {
    console.log('Filters Applied:', {
      selectedPriceRange,
      selectedColors,
      selectedSizes,
      selectedCategory,
      selectedBrands,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Filter</Text>

      <Text style={styles.sectionTitle}>Price Range</Text>
      <View style={styles.priceRangeContainer}>
        <View style={styles.priceBar}>
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: minPriceAnimation,
                backgroundColor: '#000',
              },
            ]}
            {...panResponderMin.panHandlers}
          />
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: maxPriceAnimation,
                backgroundColor: '#000',
              },
            ]}
            {...panResponderMax.panHandlers}
          />
          <View style={styles.priceRangeOverlay} />
        </View>
        <Text style={styles.priceRangeText}>${selectedPriceRange[0]} - ${selectedPriceRange[1]}</Text>
      </View>

      <Text style={styles.sectionTitle}>Color</Text>
      <View style={styles.colorContainer}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={[styles.colorCircle, { backgroundColor: color, borderColor: selectedColors.includes(color) ? '#000' : '#fff' }]}
            onPress={() => toggleSelection(color, setSelectedColors, selectedColors)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[styles.sizeButton, { backgroundColor: selectedSizes.includes(size) ? '#000' : '#fff' }]}
            onPress={() => toggleSelection(size, setSelectedSizes, selectedSizes)}
          >
            <Text style={[styles.sizeText, { color: selectedSizes.includes(size) ? '#fff' : '#000' }]}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, { backgroundColor: selectedCategory === category ? '#000' : '#fff' }]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryText, { color: selectedCategory === category ? '#fff' : '#000' }]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Brand</Text>
      <View style={styles.brandContainer}>
        {brands.map(brand => (
          <TouchableOpacity
            key={brand}
            style={[styles.brandButton, { backgroundColor: selectedBrands.includes(brand) ? '#000' : '#fff' }]}
            onPress={() => toggleSelection(brand, setSelectedBrands, selectedBrands)}
          >
            <Text style={[styles.brandText, { color: selectedBrands.includes(brand) ? '#fff' : '#000' }]}>{brand}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.discardButton} onPress={discardFilters}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  pageTitle: {
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20, 
  },
  sectionTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginVertical: 12, 
  },
  priceRangeContainer: {
    alignItems: 'center',
  },
  priceBar: {
    height: 40, 
    width: 320, 
    backgroundColor: '#ddd',
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
  },
  priceIndicator: {
    width: 25, 
    height: 40, 
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
  priceRangeOverlay: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.1,
    borderRadius: 5,
  },
  priceRangeText: {
    fontSize: 18,
    marginTop: 12, 
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorCircle: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    margin: 12, 
    borderWidth: 3, 
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeButton: {
    padding: 12, 
    margin: 12, 
    borderRadius: 8, 
    borderWidth: 2, 
  },
  sizeText: {
    fontSize: 18, 
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryButton: {
    padding: 12,
    margin: 12, 
    borderRadius: 8, 
    borderWidth: 2, 
  },
  categoryText: {
    fontSize: 18,
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  brandButton: {
    padding: 12, 
    margin: 12, 
    borderRadius: 8, 
    borderWidth: 2, 
  },
  brandText: {
    fontSize: 18, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  discardButton: {
    backgroundColor: '#808080',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  applyButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Filters;
