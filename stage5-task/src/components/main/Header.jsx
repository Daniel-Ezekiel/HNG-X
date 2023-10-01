import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className='border-b-[0.2rem] border-b-[#f4f6f8] p-4 text-sm'>
      <nav className='grid grid-cols-3 items-center md:flex md:justify-between md:max-w-[124rem] md:mx-auto'>
        <Link to='/'>
          <span className='col-start-2 flex gap-1 items-center font-inter font-bold text-blue'>
            <img src={logo} alt='logo' />
            HelpMeOut
          </span>
        </Link>

        <ul className='hidden font-work-sans font-medium text-sm md:flex md:gap-4'>
          <li>
            <a href=''>Features</a>
          </li>
          <li>
            <a href=''>How it works</a>
          </li>
        </ul>

        <Link
          to='/login'
          className='font-sora font-semibold text-[1.4rem] text-end text-blue sm:text-base'
        >
          Get started
        </Link>

        <button className='col-start-1 row-start-1 justify-self-start md:hidden'>
          <Menu fontSize='large' />
        </button>
      </nav>
    </header>
  );
};

export default Header;
