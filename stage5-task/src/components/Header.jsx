import { Menu } from "@mui/icons-material";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className='border-b-[0.4rem] border-b-[#f4f6f8] p-4 text-sm'>
      <nav className='grid grid-cols-3 items-center'>
        <span className='col-start-2 flex gap-1 items-center font-inter font-bold text-blue'>
          <img src={logo} alt='logo' />
          HelpMeOut
        </span>

        <ul className='hidden'>
          <li>
            <a href=''>Features</a>
          </li>
          <li>
            <a href=''>How it works</a>
          </li>
        </ul>

        <a
          href=''
          className='w-full font-sora font-semibold text-[1.4rem] text-end text-blue'
        >
          Get started
        </a>

        <button className='col-start-1 row-start-1 justify-self-start'>
          <Menu fontSize='large' />
        </button>
      </nav>
    </header>
  );
};

export default Header;
