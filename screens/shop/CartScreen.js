import React from 'react';
import {View, Button, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import BoldText from '../../components/BoldText';
import {COLORS} from '../../constants/colors';
import ListItem from '../../components/ListItem';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/order';

const CartScreen = ({navigation}) => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);

  const cartItems = useSelector(state => {
    const cartItemsArray = [];
    for (const key in state.cart.items) {
      cartItemsArray.push({
        prodId: key,
        prodTitle: state.cart.items[key].prodTitle,
        prodPrice: state.cart.items[key].prodPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return cartItemsArray.sort((a, b) => {
      a.prodId > b.prodId ? 1 : -1;
    });
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <BoldText style={styles.summaryText}>
          Total:{' '}
          <BoldText style={styles.amount}>
            ${cartTotalAmount.toFixed(2)}
          </BoldText>
        </BoldText>
        <Button
          color={COLORS.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
          }}
        />
      </View>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.prodId}
          renderItem={({item}) => (
            <ListItem
              item={item}
              onRemove={() => {
                dispatch(cartActions.removeFromCart(item.prodId));
              }}
              deletable={true}
              navigation={navigation}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: COLORS.primary,
  },
});

export default CartScreen;
