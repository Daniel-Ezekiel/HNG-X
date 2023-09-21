// import { useState } from "react";
import { forwardRef } from "react";
import MovieCard from "./MovieCard";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MovieCards from "./MovieCards";

const FeaturedMovies = forwardRef(function FeaturedMovies({ movieList }, ref) {
  return (
    <main
      className='mt-6 p-4 grid grid-cols-5 items-center max-w-[120rem] mx-auto'
      ref={ref}
    >
      <h2 className='col-span-3 py-2 font-bold text-3xl'>Featured Movies</h2>
      <Link
        to=''
        className='col-span-2 col-start-4 justify-self-end font-bold text-base  text-rose sm:text-xl'
      >
        View Favourites <ArrowForwardIosRounded fontSize='medium' />
      </Link>

      <MovieCards movieList={movieList} />
    </main>
  );
});

export default FeaturedMovies;
