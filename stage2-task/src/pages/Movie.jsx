import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/moviePageComponents/Header";
import MainContent from "../components/moviePageComponents/MainContent";

const Movie = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/238?api_key=6f687067231f0a6ceb9c0cae600a334c`
        );

        setMovieInfo(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieInfo();
  }, []);

  // console.log(movieInfo);

  return (
    <>
      <div className='moviePage 2xl:h-[100vh] 2xl:grid 2xl:grid-cols-12 gap-5'>
        <Header />
        <MainContent />
      </div>
    </>
  );
};

export default Movie;
