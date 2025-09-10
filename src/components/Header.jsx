import React from 'react'
import logo from '../assets/netflixLogo.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center mx-5 p-5 container'>
      <img className='w-50 object-cover cursor-pointer' src={logo} alt="logo" />
      <div className='flex flex-wrap gap-4'>
      <select className='border text-white border-gray-400 w-30 py-2 rounded-lg px-4 cursor-pointer outline-none' name="lang" id="lang">
        <option className="text-black" value="English">English</option>
        <option className="text-black"  value="Nepali">Nepali</option>
        <option className="text-black"  value="Hindi">Hindi</option>
      </select>

      <button className='inline-block py-2 px-3 w-30 bg-red-600 text-white rounded-lg cursor-pointer'>Sign In</button>
      </div>
        
    </div>
  )
}

export default Header
