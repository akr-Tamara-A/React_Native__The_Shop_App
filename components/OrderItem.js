import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import RegularText from './RegularText';
import BoldText from './BoldText';
import {COLORS} from '../constants/colors';
import ListItem from './ListItem';

const OrderItems = ({item}) => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const items = item.item.items;

  return (
    <View style={styles.card}>
      <View style={styles.summary}>
        <BoldText>${item.item.totalAmount.toFixed(2)}</BoldText>
        <RegularText>{item.item.readableDate}</RegularText>
      </View>
      <Button
        color={COLORS.primary}
        title={isShowDetails ? 'Hide details' : 'Show details'}
        onPress={() => {
          setIsShowDetails(prev => !prev);
        }}
      />
      {isShowDetails && (
        <View style={styles.details}>
          {items.map(cartItem => (
            <ListItem item={cartItem} deletable={false} key={cartItem.prodId} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
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
  },
  summary: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  details: {
    width: '100%',
  },
});

export default OrderItems;
