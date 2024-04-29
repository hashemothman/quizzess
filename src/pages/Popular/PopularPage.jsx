import React from 'react'
import CatogeryHero from '../../components/CategoryHero/CatogeryHero'
import NewquizslidePopular from '../../components/NewquizslidePopular/NewquizslidePopular'

const PopularPage = () => {
  return (
    <>
    <CatogeryHero title="Popular" />
    <div style={{margin:"50px 0"}}>
    <NewquizslidePopular/>
    </div>
    </>
  )
}

export default PopularPage