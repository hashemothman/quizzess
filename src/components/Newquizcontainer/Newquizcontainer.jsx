import React from 'react'
import './Newquizcontainer.css'
import Newquizslide from '../Newquizslide/Newquizslide'
import NewquizslideHome from '../NewquizslideHome/NewquizslideHome'
const Newquizcontainer = () => {
  return (
    <div className='zh-newquiz-container'>
        <h1 style={{marginBottom:'50px'}}>أحدث الاختبارات</h1>
        <div className='zh-newquiz-cards'>
            <NewquizslideHome/>
        </div>
    </div>
  )
}

export default Newquizcontainer