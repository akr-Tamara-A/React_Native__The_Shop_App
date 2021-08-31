import React from 'react';
import {FlatList, Alert} from 'react-native';
import ProductItem from '../../components/ProductItem';
import {useSelector, useDispatch} from 'react-redux';
import * as productsActions from '../../store/actions/products';

const UserProductScreen = ({navigation}) => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const deleteHandler = id => {
    Alert.alert('Are ou sure?', 'Do you really want to delete this thing?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ProductItem
          product={item}
          onSelect={() => {
            navigation.navigate('Edit product', {
              productId: item.id,
              productTitle: item.title,
            });
          }}
          onAction={() => deleteHandler(item.id)}
          buttons={{
            onSelect: 'Edit',
            onAction: 'Delete',
          }}
        />
      )}
    />
  );
};

export default UserProductScreen;
