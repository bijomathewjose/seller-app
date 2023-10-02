import { useState } from 'react'
import Style from './Card.module.css'
import InfoTab from '../InfoTab/InfoTab'
import {GoPeople} from 'react-icons/go'
import {BsFuelPump} from 'react-icons/bs'
import {IoSpeedometerOutline} from 'react-icons/io5'
import {PiSteeringWheelBold} from 'react-icons/pi'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import Button from '../Button/Button'
const Card = ({car}) => {
  return (
  <div className={Style.cardContainer}>
    <Image car={car}/>
    <div className={Style.dataContainer}>
      <Title car={car}/>
      <Details car={car}/>
      <PriceAndButtons car={car}/>
    </div>
  </div>
  )
}

const Image=({car})=>{
  return(
<div className={Style.imageContainer}>
      <img src={car.imageUrl} alt={`Image of ${car.make} ${car.model}`} className={Style.image}/>
    </div>
  )
}

const Title=({car})=>{
  return(
    <div className={Style.header1}>
      <h2>{`${car?.make} ${car?.model}`}</h2>
      <InfoTab containerStyle={{border:'2px dashed #4899ED',width:'fit-content'}} value={car?.year} valueStyle={{fontWeight:'bold'}}/>
    </div>
  )
}

const Details=({car})=>{
  return(
    <div className={Style.header2}>
      <InfoTab key={'seatingCapacity'} logo={<GoPeople size={18}/>} value={car.seatingCapacity+ ' People'}/>
      <InfoTab key={'fuelType'} logo={<BsFuelPump size={18}/>} value={car.fuelType}/>
      <InfoTab key={'fuelEconomy'} logo={<IoSpeedometerOutline size={18}/>} value={car.fuelEconomy}/>
      <InfoTab key={'transmission'} logo={<PiSteeringWheelBold size={18}/>} value={car.transmission}/>
    </div>
  )
}

const PriceAndButtons=({car})=>{
  const [like,setLike]=useState(false)
  function onLike(){
    setLike(like=>!like)
  }
  return(
    <div className={Style.header3}>
      <div className={Style.priceContainer}>
      <h2>${car.price}</h2>/month
      </div>
      <div className={Style.buttonContainer}>
      <Button onClick={onLike} value={like?<AiFillHeart/>:<AiOutlineHeart/>} customStyle={{background:'#DAEAFA',stroke:'#4899ED'}}/>
      <Button value={'Rent Now'}/>
      </div>
    </div>
  )
}

export default Card