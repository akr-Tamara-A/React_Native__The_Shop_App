import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.screen} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
