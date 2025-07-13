import React from 'react'
import StatCard from './StatCard'

const StatCardsSection = () => {
  return (
    <div className='flex spread-evenly stat-cards-section'>
        <StatCard statType={"Messages Recieved"} statNum={100}/>
        <StatCard statType={"Private Messages"} statNum={45}/>
        <StatCard statType={"Public Messages"} statNum={12}/>
    </div>
  )
}

export default StatCardsSection