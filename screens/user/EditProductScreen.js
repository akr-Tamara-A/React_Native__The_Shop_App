import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Platform, Alert} from 'react-native';
import Input from '../../components/Input';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import StyledHeaderButton from '../../components/HeaderButton';
import * as productsActions from '../../store/actions/products';

const EditProductScreen = ({navigation}) => {
  const route = useRoute();
  const productId = route.params.productId;

  const userProducts = useSelector(state => state.products.userProducts);
  const product = userProducts.find(item => item.id === productId);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: product ? product.title : '',
    imageUrl: product ? product.imageUrl : '',
    price: product ? product.price : '',
    description: product ? product.description : '',
  });

  const [isValidFormData, setIsValidFormData] = useState({
    title: product ? true : false,
    imageUrl: product ? true : false,
    price: product ? true : false,
    description: product ? true : false,
  });

  /** */
  useEffect(() => {
    let isFormValid = true;
    for (let key in isValidFormData) {
      isFormValid = isFormValid && isValidFormData[key];
    }

    const hasEmptyProperty = Object.values(formData).some(elem => elem === '');

    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
            <Item
              title="Add"
              iconName={
                isFormValid
                  ? Platform.OS === 'android'
                    ? 'md-checkmark-circle'
                    : 'ios-checkmark-circle'
                  : Platform.OS === 'android'
                  ? 'md-warning'
                  : 'ios-warning'
              }
              onPress={() => {
                isFormValid &&
                  product &&
                  dispatch(productsActions.updateProduct(productId, formData));
                isFormValid &&
                  !product &&
                  dispatch(productsActions.updateProduct(productId, formData));
                isFormValid && navigation.goBack();
                !isFormValid &&
                  hasEmptyProperty &&
                  Alert.alert(
                    'Something is wrong',
                    'One or more lines is empty',
                    [{text: 'Ok'}],
                  );
                !isFormValid &&
                  !hasEmptyProperty &&
                  Alert.alert(
                    'Something is wrong',
                    'One or more lines is invalid',
                    [{text: 'Ok'}],
                  );
              }}
            />
          </HeaderButtons>
        );
      },
    });
  }, [dispatch, formData, isValidFormData, navigation, product, productId]);

  /** */
  const handleInput = (name, value, isValid) => {
    setFormData({...formData, [name]: value});
    setIsValidFormData({...isValidFormData, [name]: isValid});
  };

  /** */
  return (
    <ScrollView>
      <View style={styles.form}>
        <Input
          required
          name="title"
          title="Title"
          autoCapitalyze="sentences"
          autoCorrect
          returnKeyType="next"
          defaultValue={formData.title}
          onChange={handleInput}
        />
        <Input
          required
          name="imageUrl"
          title="Image url"
          returnKeyType="next"
          defaultValue={formData.imageUrl}
          onChange={handleInput}
        />
        <Input
          required
          name="price"
          title="Price"
          editable={product ? false : true}
          keyboardType="decimal-pad"
          returnKeyType="next"
          defaultValue={formData.price.toString()}
          onChange={handleInput}
        />
        <Input
          required
          name="description"
          title="Description"
          multiline={true}
          autoCapitalyze="sentences"
          autoCorrect
          returnKeyType="next"
          defaultValue={formData.description}
          onChange={handleInput}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
});

export default EditProductScreen;
