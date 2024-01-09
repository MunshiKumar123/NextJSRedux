'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Student = ({ params }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        const id = params?.student;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((resp) => {
            setData(resp.data)
        }).catch((error) => {
            console.log("error", error);
        })
    }, [params])
    console.log('params', params);
    return (
        <React.Fragment>
            <div className="container-fluid p-5 text-white text-center" style={{ backgroundColor: '#30363D' }}>
                <h1>User Details {data?.name}</h1>
            </div>
        </React.Fragment>
    )
}
export default Student
