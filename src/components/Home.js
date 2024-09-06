import React from 'react'
import '../css/home.css';
import upcoming_movies from '../images/upcoming_movies.png'
import goat from '../images/goat.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
  
  return (
    <div className='pt-16'>


<div className="flex justify-between gap-4 p-4">
      <div className="w-1/3 h-32 bg-blue-500 text-white flex items-center justify-center text-4xl">
      Latest Movies 
      </div>
      <div className="w-1/3 h-32 bg-blue-500 text-white flex items-center justify-center text-4xl">
      Upcoming Movies
      </div>
      <div className="w-1/3 h-32 bg-blue-500 text-white flex items-center justify-center text-4xl">
        Near By Events
      </div>
    </div>
      <div>
      
        <div className='flex-items-center justify-center-screen'>
        <h1 className='text-center '> Movies Image Slider</h1>
        <img src = {goat} className='cursor-pointer' />
        </div>
      
      </div>
          
          <hr className='border border-black mt-38'/>
          <h1 className='text-center mt-2'>Recommended Movies</h1>

          <div className="flex justify-between px-8">
      {/* Wrapper for all images and buttons */}
      <div className="flex space-x-4">
        {/* Image and Button 1 */}
        <div className="text-center">
          <img src={goat} alt="Image 1" className="w-32 h-32 object-cover" />
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
            Book
          </button>
        </div>

        {/* Image and Button 2 */}
        <div className="text-center">
          <img src={goat} alt="Image 2" className="w-32 h-32 object-cover" />
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
            Book
          </button>
        </div>

        {/* Image and Button 3 */}
        <div className="text-center">
          <img src={goat} alt="Image 3" className="w-32 h-32 object-cover" />
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
            Book
          </button>
        </div>

        {/* Image and Button 4 */}
        <div className="text-center">
          <img src={goat} alt="Image 4" className="w-32 h-32 object-cover" />
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
            Book
          </button>
        </div>
      </div>
    </div>




  </div>
    

  )
}
