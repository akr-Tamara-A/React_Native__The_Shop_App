import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsOwerviewScreen from '../screens/shop/ProductsOverwviewScreen';
import {COLORS} from '../constants/colors';
import {Platform} from 'react-native';

const ProductsStack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="All Products"
        component={ProductsOwerviewScreen}
        options={() => ({
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primary : 'white',
          },
          headerTitleStyle: {
            color: Platform.OS === 'android' ? 'white' : COLORS.primary,
          },
        })}
      />
    </ProductsStack.Navigator>
  );
};

export default ShopNavigator;
