import { useState, useEffect } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import TopSection from "../components/homePageComponents/TopSection";
import FeaturedMovies from "../components/homePageComponents/FeaturedMovies";
import Footer from "../components/homePageComponents/Footer";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=6f687067231f0a6ceb9c0cae600a334c`
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

  function searchMovies(event) {
    console.log(searchValue);
    event.stopPropagation();
  }

  return (
    <>
      {isLoading && <HashLoader color='rgb(190,18,60)' className='mx-auto' />}
      {!isLoading && (
        <>
          <TopSection
            query={searchValue}
            handleChange={(e) => setSearchValue(e.target.value)}
            handleSearch={searchMovies}
          />
          <FeaturedMovies loading={isLoading} movieList={movies} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Homepage;
