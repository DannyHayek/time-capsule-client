import React from 'react'

const ViewMessageTitle = () => {

    return (
    <div>
        <h2>{localStorage.getItem("currentName")} - Bottle #{JSON.parse(localStorage.getItem("currentMessage"))["num"]}</h2>
    </div>
  )
}

export default ViewMessageTitle