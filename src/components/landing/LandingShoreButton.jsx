import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingShoreButton = () => {
  const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => {
            navigate("/messageShore");
          }} className='landing-shore-btn'>View Message Shore</button>
    </div>
  )
}

export default LandingShoreButton