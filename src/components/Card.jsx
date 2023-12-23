import React from 'react'

const Card = ({ id, img, title, date }) => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function formatDate(originalDate) {
        const date = new Date(originalDate);
        const monthName = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(date);
        return `${date.getDate()} ${capitalizeFirstLetter(monthName)} ${date.getFullYear()}`;
    }

    return (
        <div className='rounded-lg bg-white drop-shadow-xl' key={id}>
            <img src={img} alt={title} loading='lazy' className='w-full rounded-t-lg aspect-[13/9]' />
            <div className='flex flex-col px-6 py-8'>
                <p className='text-sm font-bold text-gray-400'>{formatDate(date).toUpperCase()}</p>
                <h2 className='font-bold text-xl'>{title}</h2>
            </div>
        </div>
    )
}

export default Card