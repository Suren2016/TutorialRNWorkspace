import React, { useCallback, useEffect, useState, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import * as productsActions from '../../store/actions/products';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const EditProductScreen = props => {
  const prodId = props.navigation.getParam('productId');
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId),
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : '',
      imageUrl: editedProduct ? editedProduct.imageUrl : '',
      description: editedProduct ? editedProduct.description : '',
      price: '',
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
    },
    formIsValid: editedProduct ? true : false,
  });

  // const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  // const [titleIsValid, setTitleIsValid] = useState(false);
  // const [imageUrl, setImageUrl] = useState(
  //   editedProduct ? editedProduct.imageUrl : '',
  // );
  // const [price, setPrice] = useState('');
  // const [description, setDescription] = useState(
  //   editedProduct ? editedProduct.description : '',
  // );

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors int the form.', [
        { text: 'OK' },
      ]);
      return;
    }
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(
          prodId,
          formState.inputValues.title,
          formState.inputValues.imageUrl,
          formState.inputValues.description,
        ),
      );
    } else {
      dispatch(
        productsActions.createProduct(
          formState.inputValues.title,
          formState.inputValues.imageUrl,
          formState.inputValues.description,
          +formState.inputValues.price,
        ),
      );
    }
    props.navigation.goBack();
  }, [dispatch, prodId, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const textChangeHandler = (inputIdentifier, text) => {
    let isValid = false;
    if (text.trim().length > 0) {
      // setTitleIsValid(false);
      isValid = true;
    }
    // setTitle(text);
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: isValid,
      input: inputIdentifier,
    });
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.container}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={formState.inputValues.title}
            onChangeText={t => textChangeHandler('title', t)}
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onEndEditing={() => console.log('onEditing')}
            onSubmitEditing={() => console.log('onSubmitEditing')}
          />
          {!formState.inputValues.title && (
            <Text>Please enter a valid title</Text>
          )}
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={formState.inputValues.imageUrl}
            onChangeText={t => textChangeHandler('imageUrl', t)}
          />
        </View>

        {editedProduct ? null : (
          <View style={styles.container}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={formState.inputValues.price}
              onChangeText={textChangeHandler.bind(this, 'price')}
              keyboardType="decimal-pad"
            />
          </View>
        )}

        <View style={styles.container}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={formState.inputValues.description}
            onChangeText={textChangeHandler.bind(this, 'description')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');

  return {
    headerTitle: navData.navigation.getParam('productId')
      ? 'Edit Product'
      : 'Add Product',
    headerRight: () => (
      <TouchableOpacity style={styles.icon} onPress={submitFn}>
        <Ionicons name={'save'} size={22} color={Colors.primary} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  label: {
    fontWeight: '700',
    marginVertical: 8,
  },
  icon: {
    marginRight: 12,
  },
});

export default EditProductScreen;
