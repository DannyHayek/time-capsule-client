import React from 'react'
import downloadIcon from '../../assets/Icons/download-trans.png';
import JSZip from 'jszip';
import axios from 'axios';
import GetToken from '../shared/GetToken';

const MessageInformation = () => {
  const downloadText = async () => {
    console.log("download message");

    let zip = new JSZip();
    zip.file("yourMessage.txt", JSON.parse(localStorage.getItem("currentMessage"))["body"]);
    
    const token = GetToken();
    const image = await axios.get('http://127.0.0.1:8000/storage/app/public/image_2025-07-22-06-46-33.png');
    const imageblob = await image.blob();

    zip.file("yourImage.png", 'http://127.0.0.1:8000/storage/app/public/image_2025-07-22-06-46-33.png');
    
    console.log(JSON.parse(localStorage.getItem("currentMessage"))["attachable"]);

    const zipped = await zip.generateAsync({
      type: "blob",
      streamFiles: true
    })
    
    const temp = document.createElement("a");
    temp.href = URL.createObjectURL(zipped);
    temp.download = "yourMessage.zip";
    document.body.appendChild(temp);
    temp.click();
    temp.remove();
  }

  return (
    <div className='flex'>
        <div className='view-message-info flex'>
          <article>
            <h4 className='view-info-title'>Bottled</h4>
            <p className='view-info-title-detail'>{JSON.parse(localStorage.getItem("currentMessage"))["bottled"]}</p>
          </article>

          <article>
            <h4 className='view-info-title'>Recieved</h4>
            <p className='view-info-title-detail'>{JSON.parse(localStorage.getItem("currentMessage"))["recieved"]}</p>
          </article>

          <article>
            <h4 className='view-info-title'>Status</h4>
            <p className='view-info-title-detail'>{JSON.parse(localStorage.getItem("currentMessage"))["status"]}</p>
          </article>

          <article>
            <h4 className='view-info-title'>Tag</h4>
            <p className='view-info-title-detail'>{JSON.parse(localStorage.getItem("currentMessage"))["tag"]}</p>
          </article>

          <article>
              <button className='download-message-btn' onClick={downloadText}>
                  <img className='download-icon' src={downloadIcon} alt='Download this message as ZIP'></img>
              </button>
          </article>

          <article>
              <button className='download-message-btn' onClick={downloadText}>
                  <img className='download-icon' src={JSON.parse(localStorage.getItem("currentMessage"))["attachable"]} alt='Download this message as ZIP'></img>
              </button>
          </article>
        </div>
    </div>
  )
}

export default MessageInformation