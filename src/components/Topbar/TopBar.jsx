import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { useGetMovieByGenreQuery } from '../../services/Api';
import { useDispatch, useSelector } from 'react-redux';
// import genreIcons from '../../assets/genres';
import { selectGenre } from '../../Feature/currentGenre'; // Replace with your actual redux slice path

const TopBar = () => {
    
    const dispatch = useDispatch();
    const { data, isFetching} = useGetMovieByGenreQuery();

    return (
        <div className='text-white border flex gap-4 p-3 overflow-x-auto'>
            {isFetching || (
                data?.genres.map(({ name, id }) => (
                    <Link key={id} value={id} className="text-white flex px-2 py-2 border rouded-lg justify-center items-center">
                        <div className='flex'  onClick={() => dispatch(selectGenre(id))}>
                            <div>
                                {/* <img src={genreIcons[name.toLowerCase()]} width={30} height={30} className='text-white invert mr-5' /> */}
                            </div>
                            {name}
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default TopBar;
