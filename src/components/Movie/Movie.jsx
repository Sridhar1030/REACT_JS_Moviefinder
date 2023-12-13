import React from "react";
import { Link } from "react-router-dom";
import Star from "../Star";

const Movie = ({ movie, index }) => {
  return (
    <div className="grid place-content-center">
      <div className="h-[450px] w-[250px]">
        <div className="overflow-hidden rounded-2xl bg-contain">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://www.fillmurray.com/200/300"
              }
              alt={movie.title}
            />
          </Link>
        </div>
        <div className="h-auto">
          <p className="balance mt-4 w-full overflow-hidden overflow-ellipsis whitespace-nowrap px-4 text-white">
            {movie.title}
          </p>
          <Star starVote={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default Movie;