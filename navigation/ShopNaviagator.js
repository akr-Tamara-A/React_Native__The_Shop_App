import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import {defaultHeaderStyle} from '../styles/defaultHeaderStyle';

const ProductsStack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <ProductsStack.Navigator
      screenOptions={{
        ...defaultHeaderStyle,
      }}>
      <ProductsStack.Screen
        name="All Products"
        component={ProductsOverviewScreen}
      />
    </ProductsStack.Navigator>
  );
};

export default ShopNavigator;
