import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import DrawerNavigator from './navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
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
