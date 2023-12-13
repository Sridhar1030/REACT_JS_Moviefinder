import React from "react";
import Movie from "../Movie/Movie";

const MovieList = ({ movies }) => {
return (
    <main className="mx-auto max-w-[1660px]">
      <div className="grid h-auto place-content-center gap-10 px-10 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.results?.map((movie, index) => (
          <Movie key={index} movie={movie} index={index} />
        ))}
      </div>
    </main>
  );
};

export default MovieList;