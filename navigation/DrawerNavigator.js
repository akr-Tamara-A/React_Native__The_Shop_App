import React from 'react';
import {Platform} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ShopNavigator from './ShopNaviagator';
import OrdersNavigator from './OrdersNavigator';
import AdminNavigator from './AdminNavigator';
import {COLORS} from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: COLORS.primary,
        labelStyle: {
          fontSize: 18,
          fontFamily: 'OpenSans-Bold',
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          drawerIcon: config => (
            <Icon
              size={23}
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              color={config.focused ? COLORS.primary : '#888'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: config => (
            <Icon
              size={23}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              color={config.focused ? COLORS.primary : '#888'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: config => (
            <Icon
              size={23}
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              color={config.focused ? COLORS.primary : '#888'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
