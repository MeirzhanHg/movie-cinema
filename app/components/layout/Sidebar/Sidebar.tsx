import { FC } from 'react'

import styles from './Sidebar.module.scss'
import Search from './search/Search'

const Sidebar: FC = () => {
	return <div className={styles.sidebar}>
		<Search />
		{/* movies container */}
	</div>
}

export default Sidebar
