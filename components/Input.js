import React, {useEffect, useState, useCallback} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import validation from '../utils/validation';
import BoldText from './BoldText';
import RegularText from './RegularText';

const Input = ({name, title, defaultValue, onChange, ...rest}) => {
  const [value, setValue] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    onChange(name, value, !errorMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleOnChange = useCallback(
    text => {
      setValue(text);
      setErrorMessage(validation(name, text));
    },
    [name],
  );

  return (
    <View style={styles.textInput}>
      <BoldText style={styles.label}>{title}</BoldText>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => handleOnChange(text)}
        {...rest}
      />
      {!!errorMessage && (
        <RegularText style={styles.validationMessage}>
          {errorMessage}
        </RegularText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    marginVertical: 8,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  validationMessage: {
    color: COLORS.primary,
  },
});

export default Input;
