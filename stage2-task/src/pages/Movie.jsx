import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import placeholderImg from "../assets/img/placeholderImg.png";
import moviePoster from "../assets/img/moviePoster.png";
import {
  AirplaneTicketRounded,
  ExitToApp,
  KeyboardArrowDownRounded,
  ListAlt,
  Star,
} from "@mui/icons-material";
import { List } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <header>
        <nav className='flex justify-between items-center gap-3 p-3 text-[1.8rem]'>
          <Link to='/' className='flex items-center gap-2 font-bold'>
            <img src={logo} alt='MovieBox logo' />
            MovieBox
          </Link>

          <div className='hidden'>
            <ul>
              <li>Home</li>
              <li>Movies</li>
              <li>TV Series</li>
              <li>Upcoming</li>
            </ul>

            <div className='info'>
              <h4>Play movie quizzes and earn free tickets</h4>
              <p>50k people are playing now</p>
              <button type='button'>Start playing</button>
            </div>

            <button type='button'>
              <ExitToApp />
              Log out
            </button>
          </div>

          <button className='bg-rose p-1 rounded-full'>
            <img src={menu} alt='menu button' />
          </button>
        </nav>
      </header>

      <main className='p-4 grid gap-3'>
        <div className='movie-trailer h-[20rem] rounded-2xl overflow-hidden'>
          <img
            src={moviePoster}
            alt='movie poster'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='movieDetails grid grid-cols-4 gap-3 font-medium text-xl'>
          <h1 className='col-span-full text-[2.3rem]'>Top Gun Maverick</h1>
          <span className='col-span-1'>2022</span>
          <span className='col-span-1'>PG-13</span>
          <span className='col-span-1'>2h 10m</span>
          <div className='col-span-full flex gap-2'>
            <span className='py-1 px-3 border border-gray rounded-full text-rose'>
              Action
            </span>
            <span className='py-1 px-3 border border-gray rounded-full text-rose'>
              Drama
            </span>
          </div>

          <div className='col-span-full flex items-center text-xl gap-2'>
            <span>
              <Star fontSize='large' className='mr-1' />
              8.5
            </span>{" "}
            |<span>350k</span>
          </div>

          <p className='col-span-full'>
            After thirty years, Maverick is still pushing the envelope as a top
            naval aviator, but must confront ghosts of his past when he leads
            TOP GUN&apos;s elite graduates on a mission that demands the
            ultimate sacrifice from those chosen to fly it.
          </p>

          <p className='col-span-full text-rose'>
            <span className='text-dark-gray'>Director : </span>
            Joseph Kosinski
          </p>

          <p className='col-span-full text-rose'>
            <span className='text-dark-gray'>Writers : </span>
            Joseph Kosinski
          </p>

          <p className='col-span-full text-rose'>
            <span className='text-dark-gray'>Stars : </span>
            Joseph Kosinski
          </p>

          <div className='flex items-center col-span-full border border-gray rounded-2xl'>
            <span className='bg-rose p-2 rounded-2xl mr-2 text-white'>
              Top rated movie #65
            </span>
            <span>Awards 9 nominations</span>
            <KeyboardArrowDownRounded fontSize='large' />
          </div>
        </div>

        <aside className='grid gap-3 text-xl'>
          <button className='p-2  bg-rose rounded-xl text-white hover:scale-105 transition-transform duration-500 ease-in-out'>
            <AirplaneTicketRounded className='mr-2' fontSize='large' />
            See Showtimes
          </button>

          <button
            style={{ backgroundColor: "rgba(190,18,60,0.1)" }}
            className='p-2 bg-rose rounded-xl text-dark-gray hover:scale-105 border-2 border-rose'
          >
            <ListAlt className='mr-2' fontSize='large' />
            More watch options
          </button>

          <div className='relative rounded-xl overflow-hidden'>
            <img
              src={placeholderImg}
              alt=''
              className='w-full h-full object-cover'
            />

            <button
              style={{ backgroundColor: "rgba(18,18,18,0.4)" }}
              className='absolute bottom-[0] px-2 py-2 w-full flex items-center gap-2 text-start text-base text-white'
            >
              <ListAlt fontSize='large' />
              The best movies and shows in September
            </button>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Movie;
