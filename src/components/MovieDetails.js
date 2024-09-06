import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {

    const [arrayString] = useParams();
    let moviedata = JSON.parse(decodeURIComponent(arrayString));
    console.log(moviedata)
  return (
    <div>
        
MOVIEDEATILS

    </div>
  )
}
