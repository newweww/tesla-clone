import React from 'react'
import './component.css'

const Footer = () => {
  return (
    <div className='footer flex justify-center items-end h-screen w-screen'>
      <div className='flex flex-row justify-center items-center mr-5 font-tesla-book text-white' style={{ height: '56px' }}>
        <p className='px-4 h-9 flex items-center' style={{ fontSize: '12px' }}>Tesla © 2024</p>
        <p className='px-4 h-9 flex items-center' style={{ fontSize: '12px' }}>Privacy & Legal</p>
        <p className='px-4 h-9 flex items-center' style={{ fontSize: '12px' }}>Vehicle Recalls</p>
        <p className='px-4 h-9 flex items-center' style={{ fontSize: '12px' }}>Contact</p>
        <p className='px-4 h-9 flex items-center' style={{ fontSize: '12px' }}>News</p>
        <p className='px-4 h-9 flex items-center' style={{ fontSize: '12px' }}>Get Updates</p>
        <p className='px-4 h-9 flex items-center' style={{ fontSize: '12px' }}>Locations</p>
      </div>
    </div>


  )
}

export default Footer