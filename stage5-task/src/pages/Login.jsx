import logo from "../assets/logo.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='p-4 py-[4rem] grid items-center gap-5 xl:pt-[7rem]'>
      <header className='p-4 text-sm'>
        <nav className=' items-center md:flex md:justify-between md:max-w-[124rem] md:mx-auto'>
          <Link to='/'>
            <span className='flex gap-1 items-center font-inter font-bold text-blue'>
              <img src={logo} alt='logo' />
              HelpMeOut
            </span>
          </Link>
        </nav>
      </header>

      <main className='grid gap-4 sm:w-[48rem] sm:mx-auto '>
        <section className='grid font-inter text-center'>
          <h1 className='font-bold text-xl sm:text-2xl'>Log in or Sign up</h1>
          <p className='max-w-[32rem] mt-1 mx-auto text-[1.4rem] text-gray'>
            Join millions of others in sharing successful moves on HelpMeOut
          </p>

          <Link to='/dashboard'>
            <button className='w-full mt-4 border-2 flex gap-2 justify-center border-dark1 rounded-[1.2rem] p-2 text-sm text-dark1 hover:scale-105'>
              <img src={google} alt='Google icon' />
              Continue with Google
            </button>
          </Link>
          <Link to='/dashboard'>
            <button className='w-full mt-4 border-2 flex gap-2 justify-center border-dark1 rounded-[1.2rem] p-2 text-sm text-dark1 hover:scale-105'>
              <img src={facebook} alt='Facebook icon' />
              Continue with Facebook
            </button>
          </Link>
        </section>

        <div className='grid place-items-center relative before:absolute before:h-[0.1rem] before:w-[45%] before:bg-[#B9C2C8] before:left-[0] before:top-1/2 after:absolute after:h-[0.1rem] after:w-[45%] after:bg-[#B9C2C8] after:right-[0] after:top-1/2'>
          <span className='text-[1.4rem] text-[#B9C2C8]'>or</span>
        </div>

        <section className='sm:w-[48rem] sm:mx-auto'>
          <form className='w-full grid gap-2 font-work-sans'>
            <div className='grid gap-1 font-medium text-[1.4rem]'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                className='border-2 border-[#B6B3C6] rounded-[1.2rem] p-3 text-sm text-[#626262]'
                type='text'
                placeholder='Enter your email address'
              />
            </div>
            <div className='grid gap-1 font-medium text-[1.4rem]'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                className='border-2 border-[#B6B3C6] rounded-[1.2rem] p-3 text-sm text-[#626262]'
                type='text'
                placeholder='Enter your password'
              />
            </div>
            <Link to='/dashboard'>
              <button
                className='w-full bg-blue mt-2 p-4 rounded-[1.2rem] font-medium text-base text-white hover:scale-105'
                type='button'
              >
                Sign up
              </button>
            </Link>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
