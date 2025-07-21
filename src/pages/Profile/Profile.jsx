import React from 'react'
import ProfileTitle from '../../components/profile/ProfileTitle'
import './Profile.css';
import StatCardsSection from '../../components/profile/StatCardsSection';
import { useEffect } from 'react';
import CreateAPI from '../../components/shared/CreateAPI';
import axios from 'axios';
import { useState } from 'react';
import GetUserID from '../../components/shared/GetUserID';
import GetToken from '../../components/shared/GetToken';

const Profile = () => {

  const [userStats, setStats] = useState([]);

  const fetchStats = () => {
    const api = CreateAPI("/user/user_info");

    const userID = GetUserID();
    const token = GetToken();

    
    axios.post(api, {"id" : userID}, {
      headers: {
        'Authorization': `bearer ${token}`,
      }
    }).then(response => setStats(response.data["payload"]));
  }
  
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      {!!JSON.parse(localStorage.getItem("user")) && <ProfileTitle pending = {userStats["pending"]}/>}
      
      {!!JSON.parse(localStorage.getItem("user")) && <StatCardsSection recieved={userStats["total"]} publicNum={userStats["public"]} privateNum={userStats["private"]} unlisted={userStats["unlisted"]}/>}
    </div>
  )
}

export default Profile