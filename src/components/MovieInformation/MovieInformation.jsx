import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/Api";
import Star from "../Star";
import { CiLocationArrow1 } from "react-icons/ci";
import { RxTriangleRight } from "react-icons/rx";

function Modal({ data, modalActive, modalClose }) {
  if (!modalActive) return null;

  return (
    <div
      onClick={() => modalClose()}
      className="fixed inset-0 grid place-content-center bg-black bg-opacity-50 backdrop-blur-lg"
      style={{ pointerEvents: 'none' }}
    >
      {data?.videos?.results?.length > 0 && (
        <iframe
          className="aspect-video h-[150px] sm:h-[250px] md:h-[350px] lg:h-[500px]"
          title="Trailer"
          src={`https://www.youtube.com/embed/${data.videos.results[0].key}?autoplay=1`}
          allow="autoplay"
          style={{ pointerEvents: 'auto' }}
        />
      )}
    </div>

  );
}

const MovieInformation = () => {
  const { id } = useParams();

  const { data, error, isFetching } = useGetMovieQuery(id);

  const [modalActive, setModalActive] = useState(false);

  // console.log(data);

  return (
    <section className="flex items-center justify-center text-white lg:h-full lg:flex-row">
      <div className=" flex h-auto w-full max-w-[1660px] flex-col items-center justify-center lg:h-full lg:flex-row">
        <div className="flex h-auto w-full items-center justify-center lg:w-1/2">
          <img
            src={
              data?.poster_path
                ? `http://image.tmdb.org/t/p/w500/${data?.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt=""
            className="my-6 w-1/2 rounded-2xl shadow-xl shadow-[#227fb4]"
          />
        </div>
        <div className="h-auto w-full px-4 pb-4 md:px-16 lg:w-1/2 lg:px-5 lg:py-5">
          <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            {data?.title}
          </h1>
          <p className="my-2 text-center">{data?.tagline}</p>
          <div className="flex flex-col items-center justify-between gap-2 px-5 lg:flex-row">
            <Star starVote={data?.vote_average} />
            <p className="">
              {data?.runtime}min / {data?.release_date} /{" "}
              {data?.spoken_languages[0].english_name}
            </p>
          </div>
          {/* Genres  */}
          <div className="pt-4">
            <h1 className="pb-2 font-bold">Genres:</h1>
            <div className="flex flex-wrap items-center justify-start">
              {data?.genres.map((genre, index) => (
                <p
                  key={index}
                  className="mb-4 mr-4 flex items-center justify-center rounded-lg bg-[#227fb4] px-3 py-2 text-sm"
                >
                  <span className="mr-2 uppercase">{genre?.name}</span>
                  <CiLocationArrow1 className="text-sm" />
                </p>
              ))}
            </div>
            {/* Information  */}
            <div className="">
              <h1 className="font-bold">Information:</h1>
              <p className="">{data?.overview}</p>
            </div>
            {/* Top Cast  */}
            <div className="mt-4">
              <h1 className="font-bold">Top Cast:</h1>
              <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-2">
                {data?.credits?.cast
                  .map((character, index) => (
                    <div
                      key={index}
                      className="mt-2 flex w-[100px] flex-col items-center justify-start"
                    >
                      <img
                        className="w-full rounded-2xl"
                        src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                        alt={character?.name}
                      />
                      <p className="mt-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-sm">
                        {character?.name}
                      </p>
                    </div>
                  ))
                  .slice(0, 6)}
              </div>
            </div>
          </div>
          {/* Links  */}
          <div className="mt-4 flex items-center justify-start gap-4">
            <a
              href={data?.homepage}
              className="flex items-center justify-center rounded-full border px-3 py-1"
              target="_blank"
            >
              <span>Website</span>
              <RxTriangleRight />
            </a>
            <button
              onClick={() => {
                setModalActive(true);
              }}
              className="flex items-center justify-center rounded-full border px-3 py-1"
            >
              <span>Trailer</span>
              <RxTriangleRight />
            </button>
            <Modal
              data={data}
              modalActive={modalActive}
              modalClose={() => {
                setModalActive(false);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInformation;