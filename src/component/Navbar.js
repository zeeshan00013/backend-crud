import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 py-4 container mx-auto ">

      <div className=" space-x-8  flex justify-center">
      <div className="text-white font-bold text-xl ">Logo</div>

        <ul className="flex space-x-8">
          <Link to='/' className="text-white hover:text-gray-300">Home</Link>
          <Link to='/Cart' href="#" className="text-white hover:text-gray-300">Add product</Link >
          <Link to='/Data' href="#" className="text-white hover:text-gray-300">data</Link >
          <Link to='/Images' href="#" className="text-white hover:text-gray-300">image</Link >
          <Link to='/Form' href="#" className="text-white hover:text-gray-300">form</Link >
          <Link to='/edit' href="#" className="text-white hover:text-gray-300">edit</Link >




          
        </ul>
      </div>
    </nav>
    </div>
  )
}
