import apiUrl from '../apiConfig'
import axios from 'axios'

export const productIndex = (user) => {
  console.log('this is user data: ', user)
  return axios({
    url: apiUrl + '/products/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
