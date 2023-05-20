import { FC } from 'react'
import { IMovieList } from './movie-list.interface'

import MovieItem from './MovieItem'
import Link from 'next/link'

import styles from './MoviesList.module.scss'

const MoviesList: FC<IMovieList> = ({ link, title, movies }) => {
   return (
      <div className={styles.list}>
         <div className={styles.heading}>
            {title}
         </div>
         {movies.map(movie => <MovieItem key={movie._id} movie={movie} />)}

         <Link href={link} className={styles.button}>
            See more
         </Link>
      </div>
   )
}

export default MoviesList