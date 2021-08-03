import React, {useEffect} from 'react';
import {FlatList, View, StyleSheet, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/ProductItem';
import * as cartActions from '../../store/actions/cart';
import StyledHeaderButton from '../../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const ProductsOverviewScreen = ({navigation}) => {
  const products = useSelector(state => state.products.availableProducts);

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
  }, [dispatch, navigation]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            onSelect={() => {
              navigation.navigate('Product details', {
                productId: item.id,
                productTitle: item.title,
              });
            }}
            onAction={() => {
              dispatch(cartActions.addToCart(item));
            }}
            buttons={{
              onSelect: 'View details',
              onAction: 'To cart',
            }}
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
    backgroundColor: 'white',
  },
});

export default ProductsOverviewScreen;
