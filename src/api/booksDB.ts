import axios from 'axios'

const booksDB = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
  params: {
    api_key: 'AIzaSyBqdKbsgfYO5uB5z-51C2QgDthKGHSl-mQ',
  }
})

export default booksDB
