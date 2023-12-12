import React from 'react'
import Movies from '../movies/Movies'
import TopBar from '../Topbar/TopBar'
import { useGetMovieByGenreQuery, useGetMoviesQuery } from '../../services/Api'

const Genre = () => {
    const { data } = useGetMovieByGenreQuery();
    return (
        <section className='text-white'>
            <TopBar />
            <Movies movie={data} />
        </section>
    )
}

export default Genre