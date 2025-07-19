import React from 'react'

const GetUserID = () => {
    return JSON.parse(localStorage.getItem("user"))["id"];
}

export default GetUserID