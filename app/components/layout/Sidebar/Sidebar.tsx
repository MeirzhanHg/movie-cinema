import { FC } from 'react'

import styles from './Sidebar.module.scss'
import Search from './search/Search'
import MoviesContainer from './MoviesContainer/MoviesContainer'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
