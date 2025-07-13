import React from 'react'

const StatCard = ({ statType, statNum }) => {
  return (
    <div className='flex column spread-evenly stat-card'>
        <h3 className='font stat-card-title'>{statType}</h3>
        <h1 className='font stat-card-num'>{statNum}</h1>
    </div>
  )
}

export default StatCard