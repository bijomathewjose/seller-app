import {} from 'react'
import {FiSearch} from 'react-icons/fi'
import Style from './Search.module.css'
const Search = ({onSearch}) => {
  return (
    <div className={Style.searchContainer}>
    <form onSubmit={onSearch} className={Style.searchForm}>
        <input className={Style.searchInput} type="text"  id='search' name='search' placeholder='Search...'/>
        <button className={Style.searchBtn} type="submit"><FiSearch/></button>
    </form>
    </div>
  )
}

export default Search