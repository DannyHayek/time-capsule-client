import React from 'react'

const BottleMessageFile = ({setFile, set64}) => {
  
  const convert64 = (file) => {
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const base64String = reader.result
      .replace('data:', '')
      .replace(/^.+,/, '');
      
      //console.log(base64String);
      // const image = CreateAPI("/guest/image_test");
      // axios.post(image, {
      //   "base64" : base64String,
      // }).then(response => console.log(response))
      set64(base64String);
    };
    
    console.log(reader.readAsDataURL(file));
  }

  return (

    <div className='flex column upload-image-div'>
      <label>Upload an Image...</label>
      <input onChange={e => convert64(e.target.files[0])} className='primary-btn' type='file'></input>
    </div>
  )
}

export default BottleMessageFile