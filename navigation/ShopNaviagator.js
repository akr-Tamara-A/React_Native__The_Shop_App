import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import {defaultHeaderStyle} from '../styles/defaultHeaderStyle';
import StyledHeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

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
      <ProductsStack.Screen
        name="Product details"
        component={ProductDetailsScreen}
        options={({route}) => ({
          title: route.params.productTitle,
        })}
      />
      <ProductsStack.Screen name="Cart" component={CartScreen} />
    </ProductsStack.Navigator>
  );
};

export default ShopNavigator;
