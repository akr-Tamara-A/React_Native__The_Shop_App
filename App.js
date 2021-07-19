import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNaviagator';
import {NavigationContainer} from '@react-navigation/native';

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
