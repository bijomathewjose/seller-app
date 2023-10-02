import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data.json'
const Home = () => {
  const navigate=useNavigate()
  const {page}=useParams()
  const itemsPerPage=6
  const firstIndex=(page-1)*itemsPerPage
  const lastIndex=page*itemsPerPage-1
  const [cars,setCars]=useState(data.cars)
  const carsInPage=cars.slice(firstIndex,lastIndex)
  const ObjKeys=Object.keys(data.cars[0])
  const onSearch = (e) => {
        e.preventDefault()
        const searchValue=(e.target['search'].value).toLowerCase()
        if(searchValue==='') setCars(data.cars)
        const filteredCars=data.cars.filter(car=>ObjKeys.find(key=>String(car[key]).toLowerCase().includes(searchValue)))
        setCars(filteredCars)
        console.log(filteredCars)
        navigate(`/page/1`)
  }
  return (
    <>
    <form onSubmit={onSearch}>
        <input type="text"  id='search' name='search'/>
        <button type="submit">Search</button>
    </form>
    {carsInPage.map((car)=>
    (
        <div key={car.id}>
            <h1>{`${car.make} ${car.model}`}</h1>
            <h1>{}</h1>
            <h1>{car.year}</h1>
            <h1>{car.fuelType}</h1>
            <h1>{car.transmission}</h1>
            <h1>{car.fuelEconomy}</h1>
            <h1>{car.seatingCapacity}</h1>
            <h1>{car.price}</h1>
        </div>)
    )}
    </>
)}

export default Home