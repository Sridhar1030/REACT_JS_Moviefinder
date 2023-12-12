import React, { useState } from 'react'
import MovieList from '../MovieList/MovieList'
import Pagination from '../pagination/pagination'
import { useGetMovieByGenreQuery, useGetMoviesQuery } from '../../services/Api'
import { useSelector } from 'react-redux'
import { selectGenre } from "../../Feature/currentGenre";
const Movies = () => {

  const [page, setPage] = useState(1);
  const { genreName,searchQuery } = useSelector((state) => state.currentGenre);

  const { data, isFetching, error } = useGetMoviesQuery({ genreName, page,searchQuery});


  return (
    <section className='w-full flex flex-col justify-center items-center h-auto pd-5'>
      <MovieList movies={data} />
      <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages} />
    </section>
  )
}

export default Movies
