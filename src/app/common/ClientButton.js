'use client'
import React from 'react'
import { handlerFun } from './action'
function ClientButton({ userName }) {
    return (
        <button onClick={() => handlerFun(userName)}> Say name</button>
    )
}
export default ClientButton
