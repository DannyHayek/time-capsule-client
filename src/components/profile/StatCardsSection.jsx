import React from 'react'
import StatCard from './StatCard'

const StatCardsSection = ({ recieved, privateNum, publicNum, unlisted }) => {
  console.log(recieved, privateNum, publicNum);
  return (
    <div className='flex spread-evenly stat-cards-section'>
        <StatCard statType={"Messages Recieved"} statNum={recieved}/>
        <StatCard statType={"Private Messages"} statNum={privateNum}/>
        <StatCard statType={"Public Messages"} statNum={publicNum}/>
    </div>
  )
}

export default StatCardsSection