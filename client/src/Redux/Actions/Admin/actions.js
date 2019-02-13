import axios from 'axios'

import { SET_ADMIN_USER } from './types'

// Login user
export const loginUserAdmin = (userData, history) => async dispatch => {
  try {
    const res = await axios.post('/admin/login', userData)
    console.log('DATA: ', res.data)

    const token = res.headers.authorization
    // console.log('TOKEN: ', token)

    localStorage.setItem('token', token)
    localStorage.setItem('id', res.data.id)

    // const { data: user } = await axios.get('/users/me')
    // localStorage.setItem('state', res.data)
    dispatch(setUserAdmin(res.data))
    history.push('/admin/products')
  } catch (error) {
    console.error(error)
  }
}

// Set logged in user
export const setUserAdmin = userData => {
  return {
    type: SET_ADMIN_USER,
    payload: userData
  }
}

//
export const getUserAdmin = userId => async dispatch => {
  try {
    console.log('userId: ', userId)
    const res = await axios.get(`/admin/user/${userId}`)

    dispatch(setUserAdmin(res.data))
  } catch (error) {
    console.error(error)
  }
}
