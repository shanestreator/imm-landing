import axios from 'axios'

import {
  GET_ONE_PRODUCT,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './types'

// ---------------------------------- GET ONE ---------------------------------- //

// Action
export const fetchProduct = product => {
  return {
    type: GET_ONE_PRODUCT,
    payload: product
  }
}

// Get one item from database
export const getOneProduct = prodId => async dispatch => {
  try {
    const { data: product } = await axios.get(`/api/product/one/${prodId}`)
    console.log('GET_ONE_PRODUCTS: ', product)
    dispatch(fetchProduct(product))
  } catch (error) {
    console.error(error)
  }
}

// ---------------------------------- GET ALL ---------------------------------- //

// Action
export const fetchProducts = allProducts => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: allProducts
  }
}

// Get all items from database
export const getAllProducts = () => async dispatch => {
  try {
    const { data: allProducts } = await axios.get('/api/product/all')
    console.log('GET_ALL_PRODUCTS: ', allProducts)
    dispatch(fetchProducts(allProducts))
  } catch (error) {
    console.error(error)
  }
}

// ---------------------------------- ADD NEW ---------------------------------- //

// Action
export const postProduct = newProduct => {
  return {
    type: ADD_PRODUCT,
    payload: newProduct
  }
}

// Add a new product to the database
export const addProduct = itemData => async dispatch => {
  try {
    const { data: newProduct } = await axios.post('/api/product', itemData)

    dispatch(postProduct(newProduct))
  } catch (error) {
    console.error(error)
  }
}

// ---------------------------------- UPDATE ---------------------------------- //

// Action
export const putProduct = newProduct => {
  return {
    type: UPDATE_PRODUCT,
    payload: newProduct
  }
}

// Add a new product to the database
export const updateProduct = newItemData => async dispatch => {
  try {
    const result = await axios.put('/api/product', newItemData)
    console.log('PUT_RESULT: ', result)
    // dispatch(putProduct())
  } catch (error) {
    console.error(error)
  }
}

// ---------------------------------- DELETE ---------------------------------- //

// Action
export const destroyProduct = prodId => {
  return {
    type: DELETE_PRODUCT,
    payload: prodId
  }
}

// Remove a product from the database
export const deleteProduct = prodId => async dispatch => {
  try {
    console.log('ID: ', prodId)
    const res = await axios.delete(`/api/product/${prodId}`)
    console.log('DELETE_RES: ', res)
    dispatch(destroyProduct(prodId))
  } catch (error) {
    console.error(error)
  }
}
