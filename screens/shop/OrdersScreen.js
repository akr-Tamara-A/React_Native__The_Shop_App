import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItems from '../../components/OrderItem';

const OrdersScreen = () => {
  const orders = useSelector(state => state.orders.orders);
  return (
    <View style={styles.screen}>
      <FlatList
        data={orders}
        keyExtractor={order => order.id}
        renderItem={order => {
          return <OrderItems item={order} onPress={() => {}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default OrdersScreen;
