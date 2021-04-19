import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexProduct = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/products/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showProduct = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/products/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createProduct = (user, product) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/products/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: { product }
  })
}
export const updateProduct = (user, product, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/products/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: { product: product }
  })
}

export const deleteProduct = (user, id) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/products/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
