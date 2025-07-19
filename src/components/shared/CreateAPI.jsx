import React from 'react'

const CreateAPI = (route) => {
    const baseRoute = "http://127.0.0.1:8000/api/0.1";

    return baseRoute + route;
}

export default CreateAPI