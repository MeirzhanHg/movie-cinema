import { FC } from 'react'

import Link from 'next/link'
import { getMovieUrl } from 'config/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
   return <Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.btn}>
      Sign in
   </Link>
}

export default AuthButton