import { FC } from 'react'

import { IHome } from './home.interface'

import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<Meta title='Watch movies online'>
			<Heading title='Watch movies online' className='text-gray-500 mb-8 text-xl' />
		</Meta>
	)
}

export default Home
