import React from 'react'
import Header from '../components/Header';
import { useEffect } from 'react';
import { ApiOptions } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../utils/movieSlice'

const Browse = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
       getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async()=>{

   try {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', ApiOptions);
    const json = await  data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

   }

   catch(error){

    console.log("error fetching movie data ", error);

   }

  } 

  return (
   <>
  <div className='bg-black opacity-75  h-screen'>
   <Header/>
  </div>
   
   </>
  )
}

export default Browse
