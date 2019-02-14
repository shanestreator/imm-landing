import axios from 'axios'

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    // console.log('TOKEN_HERE: ', token)
    axios.defaults.headers.common['Authorization'] = token
  } else {
    // Delete auth header
    // console.log('DELETE_TOKEN_HERE')
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
