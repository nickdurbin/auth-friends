import axios from 'axios';

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:5000'
  })
}

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      "Authorization": token,
      "Content-Type": 'application/json'
    }
  })
}