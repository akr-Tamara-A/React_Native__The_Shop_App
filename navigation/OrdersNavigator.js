import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultHeaderStyle} from '../styles/defaultHeaderStyle';
import OrdersScreen from '../screens/shop/OrdersScreen';
import StyledHeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const OrdersStack = createStackNavigator();

const OrdersNavigator = () => {
  return (
    <OrdersStack.Navigator
      screenOptions={{
        ...defaultHeaderStyle,
      }}>
      <OrdersStack.Screen
        name="Your orders"
        component={OrdersScreen}
        options={({navigation}) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Menu"
                  iconName="menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </OrdersStack.Navigator>
  );
};

export default OrdersNavigator;
