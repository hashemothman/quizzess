import './Featuredcard.css'
import { Link } from 'react-router-dom'

const Featuredcard = (props) => {
    // const class1 = "zh-smcards-container"
  return (
    // <div className={props.class || class1 }>
    <Link to={`/category/test/${props.id}`} className='ha-link' >
    <div className='zh-smcard'>
        <div className='zh-smcard-img'>
            <img className='zh-img-bigscreen' src={props.smcardimg1}/>
            <img className='zh-img-smscreen' src={props.smcardimg1sm}/>
        </div>

        <div className='zh-smcard-info'>
            <h5 className='zh-h5-bigscreen'>{props.title1}</h5>
            <h5 className='zh-h5-smscreen'>{props.title1sm}</h5>
            <h6 className='zh-h6-bigscreen'>{props.desc1}</h6>
            <h6 className='zh-h6-smscreen'>{props.desc1sm}</h6>
            {/* <p>{props.date}</p> */}
            {/* <button className='zh-btn-bigscreen'>{props.btn}</button>
            <button className='zh-btn-smscreen'>{props.btnsm}</button> */}
        </div>
    </div>
    
    
  
    </Link>
    
  )
}

export default Featuredcard