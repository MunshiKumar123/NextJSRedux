"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@/app/redux/slice';

function page() {
    const { value } = useSelector((state) => state.slice)
    const dispatch = useDispatch();
    console.log(process.env.USER_NAME);
    return (
        <React.Fragment>
            <div className="container-fluid p-5 text-white text-center" style={{ backgroundColor: '#30363D' }}>
                <h1>My About Page</h1>
                <p>Resize this responsive page to see the effect!</p>
                <button onClick={() => dispatch(increment())}> add + {value}</button>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
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

            <div className="container-fluid p-5 text-white text-center" style={{ backgroundColor: '#30363D' }}>
                <h1>My About Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
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

            <div className="container-fluid p-5 text-white text-center" style={{ backgroundColor: '#30363D' }}>
                <h1>My About Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
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
            <div className="container-fluid p-5 text-white text-center" style={{ backgroundColor: '#30363D' }}>
                <h1>My About Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
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
