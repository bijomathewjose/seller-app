import {} from 'react'
import Card from '../Card/Card'

const Gallery = ({carsInPage}) => {
  return (
    <div className="cars">
      {carsInPage.map(car=><Card key={car.id} car={car}/>)}
    </div>
  )
}

export default Gallery