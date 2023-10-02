import {} from 'react'
import Card from '../Card/Card'
import Style from './Gallery.module.css'
const Gallery = ({carsInPage}) => {
  return (
    <div className={Style.galleryContainer}>
      {carsInPage.map(car=><Card key={car.id} car={car}/>)}
    </div>
  )
}

export default Gallery