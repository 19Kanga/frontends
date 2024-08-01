import React from 'react'

export default function Banner({ title, description }) {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-600 gap-3 h-[170px]'>
            <h1 className="text-xl text-white">{title}</h1>
            <p className="font-bold text-[1.4em] text-white">{description}</p>
        </div>
    )
}