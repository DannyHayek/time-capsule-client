import React, { useEffect, useState } from 'react'
import BottleMessageTitle from '../../components/bottleMessage/BottleMessageTitle'
import BottleMessageCard from '../../components/bottleMessage/BottleMessageCard'
import './BottleMessage.css'
import BottleMessageButton from '../../components/bottleMessage/BottleMessageButton'
import axios from 'axios'
import CreateAPI from '../../components/shared/CreateAPI'
import GetToken from '../../components/shared/GetToken'
import GetUserID from '../../components/shared/GetUserID'
import { useNavigate } from 'react-router-dom'
import { file } from 'jszip'

const BottleMessage = () => {
  const [bottleDelivery, setDelivery] = useState("");
  const [bottleStatus, setStatus] = useState("");
  const [bottleTag, setTag] = useState("");
  const [bottleSurprise, setSurprise] = useState("");
  const [bottleBody, setBody] = useState("");
  const [bottleFile, setFile] = useState();
  const [fileBase64, set64] = useState();
  
  const navigate = useNavigate();
  
  
  const bottleMessage = async () => {
    // console.log(bottleDelivery);
    // console.log(bottleStatus);
    // console.log(bottleTag);
    // console.log(bottleSurprise);
    // console.log(bottleBody);
    // console.log(fileBase64);
       
    
    if (bottleDelivery == "") {
      let today = new Date().toISOString().slice(0, 10)
      setDelivery(today);
    } 
    
    if (bottleTag == "") {
      setTag(1);
    } 
    
    if (bottleStatus == "") {
      setStatus("Public");
    } 
    
    if (bottleSurprise == "") {
      setSurprise(0);
    } 
    
    const api = CreateAPI("/user/create_message");
    
    const userID = GetUserID();
    const token = GetToken();
    
    axios.post(api, {
      "user_id" : userID,
      "tag_id" : bottleTag,
      "delivery_date" : bottleDelivery,
      "status" : bottleStatus,
      "isSurprise" : bottleSurprise,
      "text" : bottleBody,
      "base64" : fileBase64
    }, {
      headers: {
        'Authorization': `bearer ${token}`,
      }
    })
    .then(response => console.log(response.data))
    .then(navigate('/Profile'));
  }

  return (
    <div className='flex column bottle-message'>
      <BottleMessageTitle />
      <BottleMessageCard setDelivery={setDelivery} setStatus={setStatus} setTag={setTag} setSurprise={setSurprise} setBody={setBody} setFile={setFile} set64={set64}/>
      <BottleMessageButton bottleMessage={bottleMessage}/>
    </div>
  )
}

export default BottleMessage