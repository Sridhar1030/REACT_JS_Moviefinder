import React from 'react'
import Movie from '../Movie/Movie'// Corrected the import statement

const MovieList = ({ movies }) => {
  return(
  <div className='p-1 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 h-auto'>
    {movies?.results?.map((movie, index) => (
      <Movie key={index} movie={movie} index={index} />
    ))}
  </div>
  )
    };

export default MovieList;
