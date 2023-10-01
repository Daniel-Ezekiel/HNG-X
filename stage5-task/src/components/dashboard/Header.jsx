import { Link } from "react-router-dom";
import { ExpandMoreRounded } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile-circle.png";

const Header = () => {
  return (
    <header className='p-3 text-sm'>
      <nav className='flex items-center justify-between md:max-w-[124rem] md:mx-auto'>
        <Link to='/'>
          <span className='flex gap-1 items-center font-inter font-bold text-blue'>
            <img src={logo} alt='logo' />
            HelpMeOut
          </span>
        </Link>

        <div className='flex items-center gap-1 text-dark1 xl:text-sm'>
          <img src={profile} alt='avatar' />
          John Mark
          <ExpandMoreRounded fontSize='large' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
