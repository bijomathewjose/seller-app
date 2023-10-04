import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data.json'
import Search from '../../components/Search/SearchBar'
import Gallery from '../../components/Gallery/Gallery'
import Pagination from '../../components/Pagination/Pagination'
import Style from  './Home.module.css'

const simplify=(str)=>{
  return str?str.replace(/\W/g,'').toLowerCase():''
}
const searchData = (string1,string2) => {
  return simplify(string1).includes(string2)
}
const Home = () => {
  const navigate=useNavigate()
  const {page}=useParams()
  const itemsPerPage=6
  const firstIndex=(page-1)*itemsPerPage
  const lastIndex=page*itemsPerPage
  const [cars,setCars]=useState(data.cars)
  const carsInPage=cars.slice(firstIndex,lastIndex)
  
    const onSearch = (e) => {
        e.preventDefault()
        const searchValue=simplify(e.target['search'].value)
        console.log(searchValue)
        if(searchValue==='') setCars(data.cars)
        const filteredCars=data.cars.filter(car=>searchData(car.make+car.model,searchValue))
        setCars(filteredCars)
        navigate(`/page/1`)
    }
  return (
    <div className={Style.homeContainer}>
      <Search onSearch={onSearch}/>
      <Gallery carsInPage={carsInPage.slice(0,3)}/>
      <Gallery carsInPage={carsInPage.slice(3,6)}/>
      <Pagination  start={firstIndex+1} end={lastIndex} length={cars.length}/>
    </div>
)}

export default Home