import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu.png";
import homeImg from "../../assets/img/home.png";
import movieImg from "../../assets/img/projector.png";
import tvShowImg from "../../assets/img/tvShow.png";
import calendarImg from "../../assets/img/calendar.png";
import { ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = ({ id }) => {
  return (
    <header className='xl:col-span-2  xl:border-r-2 xl:border-gray xl:rounded-[5rem]'>
      <nav className='flex justify-between items-center gap-3 p-3 text-[1.8rem] xl:py-10 xl:p-[0] xl:flex xl:flex-col xl:justify-start xl:items-center xl:gap-5 xl:h-full'>
        <Link to='/' className='flex items-center gap-2 font-bold'>
          <img src={logo} alt='MovieBox logo' />
          MovieBox
        </Link>

        <div className='hidden xl:grid xl:h-full place-items-center'>
          <ul className='w-full'>
            <li className='p-6 font-bold text-[2.3rem]'>
              <Link to='/' className='flex gap-2 items-center'>
                <img src={homeImg} alt='' />
                Home
              </Link>
            </li>
            <li
              style={{ backgroundColor: "rgba(190,18,60,0.1)" }}
              className='p-6 font-bold text-[2.3rem] border-r-4 border-rose'
            >
              <Link
                to={`/movies/${id}`}
                className='flex gap-2 items-center text-rose'
              >
                <img src={movieImg} alt='' />
                Movies
              </Link>
            </li>
            <li className='p-6 font-bold text-[2.3rem]'>
              <Link className='flex gap-2 items-center'>
                <img src={tvShowImg} alt='' /> TV Series
              </Link>
            </li>
            <li className='p-6 font-bold text-[2.3rem]'>
              <Link className='flex gap-2 items-center'>
                <img src={calendarImg} alt='' /> Upcoming
              </Link>
            </li>
          </ul>

          <div
            style={{ backgroundColor: "rgba(190,18,60,0.1)" }}
            className='info flex flex-col gap-2 m-4 p-5 border border-rose rounded-[2rem]'
          >
            <h4 className='font-bold'>
              Play movie quizzes and earn free tickets
            </h4>
            <p className='text-base'>50k people are playing now</p>
            <button
              style={{ backgroundColor: "rgba(190,18,60,0.2)" }}
              type='button'
              className='text-base text-rose rounded-full p-1'
            >
              Start playing
            </button>
          </div>

          <button type='button' className='font-bold text-[2.3rem]'>
            <ExitToApp className='mr-2' fontSize='large' />
            Log out
          </button>
        </div>

        <button className='bg-rose p-1 rounded-full xl:hidden'>
          <img src={menu} alt='menu button' />
        </button>
      </nav>
    </header>
  );
};

export default Header;
