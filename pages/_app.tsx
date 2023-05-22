import type { AppProps } from 'next/app'

import '../app/assets/styles/globals.scss'
import MainProvider from 'providers/MainProvider'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'

type TypeAppProps = AppProps & TypeComponentAuthFields

const App = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default App