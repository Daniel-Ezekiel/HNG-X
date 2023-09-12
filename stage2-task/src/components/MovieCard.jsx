import { Link } from "react-router-dom";
import imdb from "../assets/img/imdb.png";
import tomato from "../assets/img/tomato.png";

const MovieCard = ({ id, imgSrc, releaseDate, title }) => {
  return (
    <div
      className='movieCard max-w-[22rem] m-auto mt-6 grid grid-cols-2 gap-1 text-sm text-gray'
      data-testid='movie-card'
    >
      <Link to={`/movies/${id}`} className='col-span-full w-full'>
        <img
          className='col-span-full w-full'
          src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
          alt='Movie poster'
          data-testid='movie-poster'
        />
      </Link>
      <span
        className='col-span-full font-bold'
        data-testid='movie-release-date'
      >
        {releaseDate}
      </span>

      <Link
        to={`/movies/${id}`}
        className='col-span-full font-bold text-2xl text-dark-gray'
      >
        <h3 data-testid='movie-title'>{title}</h3>
      </Link>

      <span className='col-span-1 w-[fit-content] flex items-center gap-1 text-dark-gray'>
        <img src={imdb} alt='imdb icon' />
        8.60/10.0
      </span>
      <span className='col-span-1 flex justify-end items-center gap-1 text-dark-gray'>
        <img src={tomato} alt='imdb icon' />
        97%
      </span>

      <span className='w-full col-span-full font-bold'>
        Animation, Action, Adventure
      </span>
    </div>
  );
};

export default MovieCard;
