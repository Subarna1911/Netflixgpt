import React from 'react'
import {useSelector} from 'react-redux'
import VideoBackground from '../components/VideoBackground'
import VideoTitle from '../components/VideoTitle';

const MainContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

  if(movies === null)
    return;

  const mainMovie = movies[0];

  const{original_title, overview} = mainMovie;
  
  return (
    <div className='container'>
      <VideoTitle title={original_title} overview = {overview}/>
      <VideoBackground/>
      
    </div>
  )
}

export default MainContainer
