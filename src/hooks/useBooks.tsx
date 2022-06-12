// import { useEffect, useState } from 'react'
// import { Movie } from '../../components/HorizontalSlider/BookPoster'
// import booksDB from '../api/booksDB'
// import { BookResponse } from '../interfaces/booksInterface'

// interface MoviesState {
//     nowPlaying: Movie[];
//     popular: Movie[];
//     topRated: Movie[];
//     upcoming: Movie[];
// }

// export const useBooks = () => {

//   const [ isLoading, setIsLoading ] = useState(true)
//   const [ moviesState, setMoviesState ] = useState<MoviesState>({
//     nowPlaying: [],
//     popular: [],
//     topRated: [],
//     upcoming: [],
//   })

//   const getMovies = async () => {
        
//     const javascriptBooksPromise = booksDB.get<BookResponse>('javascript')
//     console.log('promise', javascriptBooksPromise)
//     const resps = await Promise.all([ 
//       javascriptBooksPromise, 
//     ])
//     console.log('javascript', resps)
//     // setMoviesState({
//     //   javascriptBooksPromise: resps[0].data.results,
//     // })

//     setIsLoading( false )
//   }
   
//   useEffect(() => {
//     // now_playing
//     getMovies()

//   }, [])

//   return {
//     ...moviesState,
//     isLoading
//   }

// }
