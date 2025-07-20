import React from 'react'
import downloadIcon from '../../assets/Icons/download-trans.png';
import JSZip from 'jszip';

const MessageInformation = () => {
  const downloadText = () => {
    console.log("download message");
    // let zip = new JSZip();
    const temp = document.createElement("a");
    const file = new Blob([JSON.parse(localStorage.getItem("currentMessage"))["body"]], {
      type: "text/plain"
    });

    temp.href = URL.createObjectURL(file);
    temp.download = "yourMessage.txt";
    document.body.appendChild(temp);
    temp.click();
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
        </div>
    </div>
  )
}

export default MessageInformation