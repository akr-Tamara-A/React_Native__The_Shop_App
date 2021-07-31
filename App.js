import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/order';
import DrawerNavigator from './navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
