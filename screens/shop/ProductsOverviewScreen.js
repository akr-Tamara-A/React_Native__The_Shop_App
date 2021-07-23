import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/ProductItem';

const ProductsOverviewScreen = () => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            onViewDetail={() => {}}
            onAddToCart={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default ProductsOverviewScreen;
