import React from 'react'
import '../css/home.css';
import upcoming_movies from '../images/upcoming_movies.png'
import goat from '../images/goat.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import movies from '../apiData/movies.json'

export const Home = () => {
  console.log(movies);
  const nav = useNavigate();

  function navToLatestMovies() {
    nav('/latestmovies')
  }

  function navToUpcomingMovies() {
    nav('/upcomingmovies')
  }

  function navToNearByEvents() {
    nav('/nearbyevents')
  }
  // function navToMovieDetails(item){
  //   const moviedata = encodeURIComponent(JSON.stringify(item))
  //   nav(`/moviedetails/${moviedata}`)
  // }
  function navToMovieDetails(moviedata){
    // const arrayString = encodeURIComponent(JSON.stringify(moviedata))
    // nav(`/moviedetails/${moviedata}`)
    nav('/moviedetails')
   }
  return (
   
    <div className='pt-16'>
        <div className="flex justify-between gap-4 p-4">
          <div className="w-1/3 h-32 bg-blue-500 text-white flex items-center justify-center text-4xl cursor-pointer" onClick={navToLatestMovies}>
          Latest Movies 
          </div>
          <div className="w-1/3 h-32 bg-blue-500 text-white flex items-center justify-center text-4xl cursor-pointer" onClick={navToUpcomingMovies}>
          Upcoming Movies
          </div>
          <div className="w-1/3 h-32 bg-blue-500 text-white flex items-center justify-center text-4xl cursor-pointer" onClick= {navToNearByEvents}>
            Near By Events
          </div>
        </div>

    <div>
      <h1 className='text-center '> Movies Image Slider</h1>
       <div className="flex justify-center items-center h-full">
           <img src={goat} alt="Image" className="w-100 h-40 object-cover" />
        </div>
    </div>
          
        <hr className='border border-black mt-12'/>
        <h1 className='text-center mt-2'>Recommended Movies</h1>

      <div className="flex justify-center px-8">
     
        <div className="flex space-x-4">
        {movies.map((item, index) => (
        
        <div key = {index} className="text-center">
          <img src={ item.Images}  alt="Image 1" className="w-40 h-40 object-fill" />
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded" onClick={navToMovieDetails}>
            Book
          </button>
        </div>

       
           ))}
      </div>
    </div>

 

  </div>
    

  )
}
