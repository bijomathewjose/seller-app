import {} from 'react'
import Style from './InfoTab.module.css'
const InfoTab = ({logo='',value='',containerStyle,logoStyle,valueStyle}) => {
  return (
    <div className={Style.infoContainer} style={containerStyle}>
      {logo && <p className={Style.logo} style={logoStyle}>{logo}</p>}
      <p className={Style.value} style={valueStyle}>{value}</p>
    </div>
  )
}

export default InfoTab