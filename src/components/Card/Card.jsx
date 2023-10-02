import {} from 'react'

const Card = ({car}) => {
  return (
    <div className="car" >
    <div className="car-info">
      <h3>{`${car.make} ${car.model}`}</h3>
      <p>{car.year}</p>
      <p>${car.price}/month</p>
      <a href="#">Rent now</a>
    </div>
  </div>
  )
}

export default Card