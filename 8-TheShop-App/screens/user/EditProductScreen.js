import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import * as productsActions from '../../store/actions/products';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const EditProductScreen = props => {
  const prodId = props.navigation.getParam('productId');
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId),
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : '',
  );
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : '',
  );

  const submitHandler = useCallback(() => {
    console.log('Save');
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(prodId, title, imageUrl, description),
      );
    } else {
      dispatch(
        productsActions.createProduct(title, imageUrl, description, +price),
      );
    }
    props.navigation.goBack();
  }, [dispatch, prodId, title, imageUrl, description, price]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.container}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
        </View>

        {editedProduct ? null : (
          <View style={styles.container}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={text => setPrice(text)}
            />
          </View>
        )}

        <View style={styles.container}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
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
