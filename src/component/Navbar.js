import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 py-5 container mx-auto ">

      <div className=" space-x-6  flex justify-center">
      <div className="text-white font-bold text-2xl ">Logo</div>

        <ul className="flex space-x-8">d
dsfsdf          <Link to='/Cart' href="#" className="text-white hover:text-wedsadasdqeqasdadasgrawewy-800">Add product</Link >
          <Link to='/Data' href="#" className="text-white hover:weqeqtexfsdfsdt-grqqweqwweeqweqqway-344">data</Link >
          <Link to='/Images' href="#" className="text-white howeveeqweqr:wqqweqetext-gray-400">image</Link >
          <Link to='/Form' href="#" className="text-fsdfsfwhite hover:sdsdfsdfsdfsdfsd-gray-200">form</Link >
          <Link to='/edit' href="#" className="text-white hover:text-gray-100">sdfsdfsdf</Link >




          
        </ul>
      </div>
    </nav>
    </div>
  )
}
