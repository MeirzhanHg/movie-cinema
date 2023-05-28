import { FC } from 'react'
import PopularMovies from './PopularMovies'
import FavoriteMovies from './FavoriteMovies/FavoriteMovies'
import dynamic from 'next/dynamic'


const DynamicFavoritesMovies = dynamic(() => import('./FavoriteMovies/FavoriteMovies'), {
   ssr: false
})

const MoviesContainer: FC = () => {
   return <div>
      <PopularMovies />
      <DynamicFavoritesMovies />
   </div>
}

export default MoviesContainer