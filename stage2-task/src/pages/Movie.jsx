import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/moviePageComponents/Header";
import MainContent from "../components/moviePageComponents/MainContent";
import { HashLoader } from "react-spinners";

const Movie = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchMovieInfoByID = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=6f687067231f0a6ceb9c0cae600a334c`
        );

        setMovieInfo(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchMovieInfoByQuery = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${id}&api_key=6f687067231f0a6ceb9c0cae600a334c`
        );
        const movieID = res.data.results[0].id;

        const newRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieID}?api_key=6f687067231f0a6ceb9c0cae600a334c`
        );
        setMovieInfo(newRes.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    Number.isFinite(Number(id))
      ? fetchMovieInfoByID()
      : fetchMovieInfoByQuery();
  }, []);

  const {
    title,
    overview,
    backdrop_path,
    genres,
    release_date,
    runtime,
    vote_average,
  } = !isLoading && movieInfo;
  console.log(movieInfo);

  return (
    <>
      <div className='moviePage relative xl:grid xl:grid-cols-12'>
        <Header />
        {isLoading && (
          <HashLoader
            style={{
              position: "absolute",
              top: "7rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            color='#be123c'
            className='mx-auto place-self-start sm:col-span-full'
          />
        )}
        {!isLoading && (
          <MainContent
            id={id}
            title={title}
            details={overview}
            imgSrc={backdrop_path}
            year={release_date.slice(0, 4)}
            length={runtime}
            rating={vote_average}
            genres={genres}
          />
        )}
      </div>
    </>
  );
};

export default Movie;
