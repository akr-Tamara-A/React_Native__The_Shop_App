import React from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {Platform} from 'react-native';
import RegularText from '../components/RegularText';
import BoldText from '../components/BoldText';

const ProductItem = ({product, onViewDetail, onAddToCart}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.card}>
      <TouchableComponent onPress={onViewDetail} useForeground>
        <View style={styles.imageContainer}>
          <Image source={{uri: product.imageUrl}} style={styles.image} />
        </View>
      </TouchableComponent>
      <View style={styles.details}>
        <BoldText style={styles.title}>{product.title}</BoldText>
        <RegularText style={styles.price}>
          ${product.price.toFixed(2)}
        </RegularText>
      </View>
      <View style={styles.actions}>
        <Button
          color={COLORS.primary}
          title="View details"
          onPress={onViewDetail}
        />
        <Button color={COLORS.primary} title="To cart" onPress={onAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    height: '15%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default ProductItem;
