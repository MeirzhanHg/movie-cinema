import { FC } from 'react'

import styles from './Favorites.module.scss'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import FavoriteItem from './FavoriteItem'
import { useFavorites } from './useFavorites'

const Favorite: FC = () => {
   const { favoriteMovies, isLoading } = useFavorites()

   return (
      <Meta title='Favorites'>
         <Heading title='Favorites' />

         <section className={styles.favorites}>
            {
               isLoading ? (
                  <SkeletonLoader
                     count={3}
                     className={styles.skeletonLoader}
                     containerClassName={styles.containerLoader}
                  />
               ) : (
                  favoriteMovies?.map((movie) => (
                     <FavoriteItem key={movie._id} movie={movie} />
                  ))
               )
            }
         </section>
      </Meta>
   )
}

export default Favorite