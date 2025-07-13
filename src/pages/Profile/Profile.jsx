import React from 'react'
import ProfileTitle from '../../components/profile/ProfileTitle'
import './Profile.css';
import StatCardsSection from '../../components/profile/StatCardsSection';

const Profile = () => {
  return (
    <div>
      <ProfileTitle />
      <StatCardsSection />
    </div>
  )
}

export default Profile