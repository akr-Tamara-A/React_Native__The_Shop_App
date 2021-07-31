import React, {useEffect} from 'react';
import {
  View,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import * as cartActions from '../../store/actions/cart';
import StyledHeaderButton from '../../components/HeaderButton';
import {COLORS} from '../../constants/colors';
import RegularText from '../../components/RegularText';
import BoldText from '../../components/BoldText';

const ProductDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const productId = route.params.productId;

  const availableProducts = useSelector(
    state => state.products.availableProducts,
  );
  const product = availableProducts.find(item => item.id === productId);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
            <Item
              title="Cart"
              iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              onPress={() => {
                navigation.navigate('Cart');
              }}
            />
          </HeaderButtons>
        );
      },
    });
  }, [dispatch, navigation, product]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View style={styles.actions}>
        <Button
          color={COLORS.primary}
          title="Add to cart"
          onPress={() => {
            dispatch(cartActions.addToCart(product));
          }}
        />
      </View>
      <BoldText style={styles.price}>${product.price.toFixed(2)}</BoldText>
      <RegularText style={styles.description}>
        {product.description}
      </RegularText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
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
