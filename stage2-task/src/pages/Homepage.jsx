import { Link } from "react-router-dom";
import poster from "../assets/img/poster.png";
import featuredPoster from "../assets/img/featured-poster.png";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import imdb from "../assets/img/imdb.png";
import tomato from "../assets/img/tomato.png";
// import { Facebook } from "@mui/icons-material";

const Homepage = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${poster})` }}
        className=' bg-center bg-cover bg-no-repeat text-white'
      >
        <header className='py-5 px-3'>
          <nav className='grid grid-cols-2 justify-between items-center gap-2 text-xl'>
            <Link to='/' className='col-span-1 flex items-center gap-2'>
              <img src={logo} alt='MovieBox logo' />
              MovieBox
            </Link>

            <div className='form-control col-span-full'>
              <input
                className='w-full p-2 bg-[transparent] border border-white rounded-xl text-white placeholder:text-white'
                type='text'
                placeholder='Search for your movie of choice'
              />
            </div>

            <div className='login col-start-2 row-start-1 justify-self-end flex items-center gap-1'>
              <span>Sign in</span>

              <button className='bg-rose p-1 rounded-full'>
                <img src={menu} alt='menu button' />
              </button>
            </div>
          </nav>

          <section className='hero grid grid-cols-4 gap-3 mt-5 pt-[7rem] pb-5 text-xl'>
            <h1 className='col-span-full font-bold text-4xl'>
              John Wick 3: Parabellum
            </h1>

            <span className='col-span-2 w-[fit-content] flex items-center gap-1'>
              <img src={imdb} alt='imdb icon' />
              8.60/10.0
            </span>
            <span className='col-span-2 flex items-center gap-1'>
              <img src={tomato} alt='imdb icon' />
              97%
            </span>

            <p className='col-span-full'>
              John Wick is on the run after killing a member of the
              international assassins&apos; guild, and with a $14 million price
              tag on his head, he is the target of hit men and women everywhere.
            </p>

            <button className='col-span-2 p-2 bg-rose rounded-xl' type='button'>
              Watch Trailer
            </button>
          </section>
        </header>
      </section>

      <main className='mt-6 p-4'>
        <h2 className='py-2 font-bold text-3xl'>Featured Movies</h2>

        <div className='movie-listing'>
          <div className='movieCard max-w-[22rem] m-auto mt-4 grid grid-cols-2 gap-1 text-sm text-gray'>
            <img
              className='col-span-full w-full'
              src={featuredPoster}
              alt='Movie poster'
            />
            <span className='col-span-full font-bold'>USA, 2021</span>
            <h3 className='col-span-full font-bold text-2xl text-dark-gray'>
              Spiderman: Into the Spiderverse
            </h3>

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
        </div>
      </main>

      <footer className='p-4 grid gap-2 text-base text-center'>
        <div className='socials'>{/* <Facebook /> */}</div>

        <div className='other-links flex gap-2 justify-center font-bold'>
          <a href='/' className='hover:underline'>
            Conditions of Use
          </a>
          <a href='/' className='hover:underline'>
            Privacy &amp; Policy
          </a>
          <a href='/' className='hover:underline'>
            Press Room
          </a>
        </div>

        <p className='copyright font-bold text-gray'>
          &copy; MovieBox by Adriana Eka Prayudha
        </p>
        <p className='copyright font-bold text-gray'>
          Coded by Daniel B. Ezekiel
        </p>
      </footer>
    </>
  );
};

export default Homepage;
