import { FC } from 'react'

import styles from './Favorites.module.scss'
import { IMovie } from '@/shared/types/movie.types'
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'
import Link from 'next/link'
import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
   return <div className={styles.itemWrapper}>
      <FavoriteButton movieId={movie._id} />
      <Link href={getMovieUrl(movie.slug)} className={styles.item}>
         <Image
            alt={movie.title}
            src={movie.bigPoster}
            layout='fill'
            draggable={false}
            priority
         />
      </Link>
      <div className={styles.title}>{movie.title}</div>
   </div>
}

export default FavoriteItem