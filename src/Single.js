import React from 'react'
import weather from './weather.webp'
import css from './Single.module.css'
const Single = (props) => {
    console.log("hhd",props.weathers)
  return (
   <>
   <div className={css.imgs}>
      <img src={weather} />
      <div className={css.box}>
    <h2> </h2>
      </div>
      </div>
</>
  
  )
}

export default Single
