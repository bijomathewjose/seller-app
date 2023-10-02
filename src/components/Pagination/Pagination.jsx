import {} from 'react'
import Button from '../Button/Button'
import Style from './Pagination.module.css'
import { useNavigate, useParams } from 'react-router-dom'
const customStyle={background:'#ffffff',color:'black',boxShadow:'0 0 5px 5px rgba(0, 0, 0, 0.1)',width:'40px'}
const Pagination = ({length}) => {
  const {page}=useParams()
  const currentPage=Number(page)
  const pages=Array.from({length:10},(_,i)=>i+1)
  const navigate=useNavigate()
  const onForward=()=>{

    if(currentPage<10) navigate(`/page/${currentPage+1}`)
  }
  const onBackword=()=>{
    if(currentPage>1) navigate(`/page/${currentPage-1}`)
  }
  return (
    <div className={Style.Container}>
      <p>6 cars of {length}</p>
      
        <div className={Style.pages}>
        {currentPage!==1 &&<Button  value='<' customStyle={customStyle} onClick={onBackword}/>}
          {
            pages.map(page=>
              <Button 
              key={page}  
              value={page} 
              customStyle={currentPage!==page?customStyle:null}
              onClick={()=>navigate(`/page/${page}`)}
              />
            )
          }
          {currentPage!==10 &&<Button value='>' onClick={onForward} customStyle={customStyle}/>}
        </div>
    </div>
  )
}

export default Pagination