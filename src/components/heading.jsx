import React from 'react';
import './heading.css';
import age from '../images/age.jpeg';

const Heading = () => {
  return (
    <div className='heading_component'>
      <div className='form_component'>
        <h1 className='heading'>Lets CAST THE SPELL 💵🧙‍♂️</h1>
        <p className='paragraph'>
          Introducing our HEALTH WIZARD 😎 - <br />
          A cutting-edge predictive model!<br /> {/* Added new line here */}
          🌟 This model, uses data analytics and machine learning magic <br />
          🪄 delivers spot-on cost predictions for medical treatments required for persons based on vast criterias.<br />
          🚀 Say hello to informed healthcare decisions and accurate pricing 💰! 💡
        </p>
        <img src={age} alt="Age" className='image' />
      </div>
    </div>
  );
}

export default Heading;