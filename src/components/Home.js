import React from 'react'
import '../css/home.css';
import upcoming_movies from '../images/upcoming_movies.png'
import goat from '../images/goat.png'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
//import movies from '../apiData/movies.json'

export const Home = () => {
  const nav = useNavigate();
  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON').
    then(response => setData(response.data));
  },[]) 
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
    console.log(moviedata)
    // const arrayString = encodeURIComponent(JSON.stringify(moviedata))
    // nav(`/moviedetails/${moviedata}`)
   nav(`/moviedetails/${moviedata.Title}`, {state:{moviedata}})
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
        {data.slice(0,4).map((item, index) => (
        
        <div key = {index} className="text-center">
          <img src={ item.Images}  alt="Image 1" className="w-40 h-40 object-fill" />
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => navToMovieDetails(item)}>
            Book  
          </button>
        </div>

       
           ))}
      </div>
    </div>

 

  </div>
    

  )
}
