import { useState, useEffect } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import MovieCard from "./MovieCard";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const FeaturedMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=6f687067231f0a6ceb9c0cae600a334c`
        );

        setMovies(res.data.results.slice(0, 10));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);
  console.log(isLoading, movies);

  const moviesCards =
    !isLoading &&
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        imgSrc={movie.poster_path}
        releaseDate={movie.release_date}
        title={movie.title}
      />
    ));
  return (
    <main className='mt-6 p-4 grid grid-cols-5 items-center'>
      <h2 className='col-span-3 py-2 font-bold text-3xl'>Featured Movies</h2>
      <p className='col-span-2 col-start-4 justify-self-end font-bold text-xl text-rose'>
        See more <ArrowForwardIosRounded fontSize='medium' />
      </p>

      <div className='movie-listing col-span-full'>
        {isLoading && <HashLoader color='#be123c' className='mx-auto mt-5' />}
        {!isLoading && moviesCards}
      </div>
    </main>
  );
};

export default FeaturedMovies;
