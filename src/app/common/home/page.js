import React from 'react'
import Link from 'next/link'
import axios from 'axios'

const page = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return (
        <React.Fragment>
            <div className="container-fluid p-5 text-white text-center" style={{ backgroundColor: '#30363D' }}>
                <h1>My Home Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        {response?.data?.map((item, index) => (
                            <ul key={index}>
                                <li><Link href={`/common/home/${item.id}`}>{item?.name}</Link></li>
                            </ul>
                        ))}
                        <ul>
                        </ul>
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default page