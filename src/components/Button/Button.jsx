import {} from 'react'
import Style from './Button.module.css'
const Button = ({value,customStyle,onClick}) => {
  return (
    <div onClick={onClick} style={customStyle} className={Style.button}>{value}</div>
  )
}

export default Button