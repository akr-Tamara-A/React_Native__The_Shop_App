import React from 'react';
import {View, Image, Button, ScrollView, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../constants/colors';
import RegularText from '../../components/RegularText';
import BoldText from '../../components/BoldText';

const ProductDetailsScreen = () => {
  const route = useRoute();
  const productId = route.params.productId;

  const availableProducts = useSelector(
    state => state.products.availableProducts,
  );
  const product = availableProducts.find(item => item.id === productId);

  return (
    <ScrollView>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View style={styles.actions}>
        <Button color={COLORS.primary} title="Add to cart" onPress={() => {}} />
      </View>
      <BoldText style={styles.price}>${product.price.toFixed(2)}</BoldText>
      <RegularText style={styles.description}>
        {product.description}
      </RegularText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    alignItems: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
export default ProductDetailsScreen;
