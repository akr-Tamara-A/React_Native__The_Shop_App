import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import RegularText from './RegularText';
import BoldText from './BoldText';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = ({item, onRemove, deletable}) => {
  return (
    <View style={styles.card}>
      <View style={styles.line}>
        <RegularText style={styles.quantity}>{item.quantity} </RegularText>
        <BoldText style={styles.text}>{item.prodTitle}</BoldText>
      </View>
      <View style={styles.line}>
        <BoldText style={styles.text}> ${item.sum.toFixed(2)} </BoldText>
        {deletable && (
          <View style={styles.removeButton}>
            <TouchableOpacity onPress={onRemove}>
              <Icon
                name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                size={23}
                color="red"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  quantity: {
    color: '#888',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 20,
  },
});

export default ListItem;
