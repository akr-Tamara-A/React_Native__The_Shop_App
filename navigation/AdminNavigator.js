import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultHeaderStyle} from '../styles/defaultHeaderStyle';
import UserProductScreen from '../screens/user/UserProdutsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import StyledHeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const UserStack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        ...defaultHeaderStyle,
      }}>
      <UserStack.Screen
        name="Your products"
        component={UserProductScreen}
        options={({navigation}) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Add"
                  iconName={
                    Platform.OS === 'android' ? 'md-create' : 'ios-create'
                  }
                  onPress={() => {
                    navigation.navigate('Edit product', {
                      productTitle: 'New product',
                    });
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <UserStack.Screen
        name="Edit product"
        component={EditProductScreen}
        options={({route, navigation}) => ({
          title: route.params.productId ? 'Edit product' : 'Add product',
        })}
      />
    </UserStack.Navigator>
  );
};

export default AdminNavigator;
