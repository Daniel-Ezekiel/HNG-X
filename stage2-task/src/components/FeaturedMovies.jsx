import { useState, useEffect } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import featuredPoster from "../assets/img/featured-poster.png";
import MovieCard from "./MovieCard";

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
        imgSrc={featuredPoster}
        releaseDate={movie.release_date}
        title={movie.title}
      />
    ));
  return (
    <main className='mt-6 p-4'>
      <h2 className='py-2 font-bold text-3xl'>Featured Movies</h2>

      <div className='movie-listing'>
        {isLoading && <HashLoader color='#be123c' className='mx-auto mt-5' />}
        {!isLoading && moviesCards}
      </div>
    </main>
  );
};

export default FeaturedMovies;
