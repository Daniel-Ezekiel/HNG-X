import { Link } from "react-router-dom";
import imdb from "../../assets/img/imdb.png";
import tomato from "../../assets/img/tomato.png";
import { Favorite } from "@mui/icons-material";
import { useEffect, useState } from "react";

const MovieCard = (props) => {
  const [isFavourite, setIsFavourite] = useState(props.favourited);

  function toggleFavourite(event) {
    event.stopPropagation();
    setIsFavourite((prevIsFavourite) => !prevIsFavourite);
  }

  useEffect(() => {
    let allFavs = [
      ...new Set(localStorage.getItem("favMovies")?.split(";")),
    ].join(";");

    localStorage.clear();
    if (!allFavs && isFavourite) {
      localStorage.setItem("favMovies", `${JSON.stringify(props)};`);
    } else if (allFavs && !isFavourite) {
      allFavs = allFavs.replaceAll(`${JSON.stringify(props)};`, "");
      localStorage.setItem("favMovies", allFavs);
    } else if (allFavs && isFavourite) {
      allFavs += `${JSON.stringify(props)};`;
      localStorage.setItem("favMovies", allFavs);
    }
  }, [isFavourite]);

  return (
    <div
      className='movieCard relative m-auto mt-6 grid grid-cols-2 gap-1 text-sm text-gray hover:scale-105 transition-transform duration-500 ease-in-out'
      data-testid='movie-card'
    >
      <button
        type='button'
        className=' absolute top-2 right-2 flex justify-center items-center w-5 h-5 p-1 bg-[rgba(243,244,246,0.5)] rounded-full text-gray'
        onClick={toggleFavourite}
      >
        <Favorite className={isFavourite ? "text-rose" : "text-[#d1d5db]"} />
      </button>

      <Link to={`/movies/${props.id}`} className='col-span-full w-full'>
        <img
          className='col-span-full w-full'
          src={`https://image.tmdb.org/t/p/w500${props.imgSrc}`}
          alt='Movie poster'
          data-testid='movie-poster'
        />
      </Link>
      <span
        className='col-span-full font-bold'
        data-testid='movie-release-date'
      >
        {props.releaseDate}
      </span>

      <Link
        to={`/movies/${props.id}`}
        className='col-span-full font-bold text-2xl text-dark-gray hover:underline'
      >
        <h3 data-testid='movie-title'>{props.title}</h3>
      </Link>

      <span className='col-span-1 w-[fit-content] flex items-center gap-1 text-dark-gray'>
        <img src={imdb} alt='imdb icon' />
        {props.rating.toPrecision(2)}/10
      </span>
      <span className='col-span-1 flex justify-end items-center gap-1 text-dark-gray'>
        <img src={tomato} alt='imdb icon' />
        {(props.rating * 10).toPrecision(2)}%
      </span>

      {/* <span className='w-full col-span-full font-bold'>
        Animation, Action, Adventure
      </span> */}
    </div>
  );
};

export default MovieCard;
