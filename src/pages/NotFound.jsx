import React from 'react'
import { notFound } from '../assets'

const NotFound = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center text-2xl'>
            <img src={notFound} alt="animation" className='w-[40%]'/>
        </div>
    )
}

export default NotFound