import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const baseURL = 'http://localhost:8080/api'

const booksDB = axios.create({ baseURL })

booksDB.interceptors.request.use(
  async(config) => {
    const token = await AsyncStorage.getItem('token')
    if ( token ) {
      config.headers['x-token'] = token
    }
    return config
  }
)

export default booksDB
