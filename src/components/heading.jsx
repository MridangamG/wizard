import React from 'react'
import './heading.css'
import age from '../images/age.jpeg'
const Heading = () => {
  return (
    <div className='heading_component'>
    <div className=''>
        <h1 className='heading'>Lets CAST THE SPELL 💵🧙‍♂️</h1>
        <p className='paragraph'> <b>Introducing our groundbreaking HEALTH WIZARD 😎 , an advanced predictive model! 🌟 This cutting-edge system leverages the power of data analytics and machine learning to provide precise cost predictions for necessary medical treatments, considering a wide array of criteria. 🪄 Experience the future of healthcare decision-making with accurate pricing insights! 💰 Embrace informed choices and financial transparency in your medical journey! 💡 #HealthWizard #PredictiveHealthcare #InformedDecisions 🚀💰! 💡
        </b></p>
        <img src={`${age}`}/>
    </div>
    </div>
  )
}

export default Heading
