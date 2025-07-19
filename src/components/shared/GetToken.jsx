import React from 'react'

const GetToken = () => {
    return JSON.parse(localStorage.getItem("user"))["token"];
}

export default GetToken