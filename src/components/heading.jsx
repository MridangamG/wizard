import React from 'react'
import './heading.css'
import age from '../images/age.jpeg'
const Heading = () => {
  return (
    <div className='heading_component'>
    <div className=''>
        <h1 className='heading'>Lets CAST THE SPELL 💵🧙‍♂️</h1>
        <p className='paragraph'>Introducing our HEALTH WIZARD 😎 -{'\n'} A cutting-edge predictive model! .
         🌟 This model, uses  data analytics and machine learning magic {"\n"},🪄 delivers spot-on cost 
        predictions for medical treatments required for persons based on vast criterias.{'\n'} 
        .🚀 Say hello to informed healthcare decisions and acurate pricing 💰! 💡
        </p>
        <img src={`${age}`}/>
    </div>
    </div>
  )
}

export default Heading
