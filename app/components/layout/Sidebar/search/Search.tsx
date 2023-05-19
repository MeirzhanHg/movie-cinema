import { FC } from 'react'

import { useSearch } from './useSearch'
import SearchList from './searchList/SearchList'
import SearchField from '@/components/ui/search-field/SearchFeild'

import styles from './Search.module.scss'

const Search: FC = () => {
   const { isSuccess, data, handleSearch, searchTerm } = useSearch()

   return (
      <div className={styles.wrapper}>
         <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
         {isSuccess && <SearchList movies={data || []} />}
      </div>
   )
}

export default Search