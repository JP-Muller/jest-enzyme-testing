import axios from 'axios'

export const getPlaceholderData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(res => {
      return res.data
    })
    .catch(err => console.log('Error', err))
}