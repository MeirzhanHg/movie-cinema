import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

import styles from './Layout.module.scss'


const Layout = ({ children }: { children: React.ReactElement }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
