// import { useState, useEffect } from "react";
// import axios from "axios";
// import { HashLoader } from "react-spinners";
import MovieCard from "./MovieCard";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const FeaturedMovies = ({ movieList }) => {
  const moviesCards = movieList.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      imgSrc={movie.poster_path}
      releaseDate={movie.release_date}
      title={movie.title}
      rating={movie.vote_average}
    />
  ));

  console.log(movieList);
  return (
    <main className='mt-6 p-4 grid grid-cols-5 items-center max-w-[120rem] mx-auto'>
      <h2 className='col-span-3 py-2 font-bold text-3xl'>Featured Movies</h2>
      <p className='col-span-2 col-start-4 justify-self-end font-bold text-xl text-rose'>
        See more <ArrowForwardIosRounded fontSize='medium' />
      </p>

      <div className='movie-listing col-span-full grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {moviesCards}
      </div>
    </main>
  );
};

export default FeaturedMovies;
