import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams ,useLocation} from 'react-router-dom'

export const MovieDetails = () => {

   // const [moviedata] = useParams();

   const location = useLocation();
   const {moviedata} = location.state;
    // let moviedata = JSON.parse(decodeURIComponent(arrayString));
    // console.log(moviedata)
  return (
    <div>
      <div className='pt-48 pl-40 pr-40'>
      <div className="w-full flex border border-gray-300">
      <div className="w-3/10">  <img src = {moviedata.Images} className='w-64 h-64' /> </div>
      <div className="w-7/10"> 
      {moviedata.Title} <br/>
        {moviedata.Released} <br/>
        {moviedata.Runtime} <br/>
        {moviedata.imdbRating}</div>
    </div>
      
       

        <div>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Book Now</button>
        </div>
      </div>

    </div>
  )
}
