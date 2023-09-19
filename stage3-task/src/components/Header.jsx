import { Link } from "react-router-dom";
import { auth } from "../firebase";
// import { Auth } from "firebase/auth";

const Header = ({ currentUser }) => {
  return (
    <header className='flex justify-between p-4 py-7 max-w-[120rem] mx-auto'>
      <h1 className='w-[10rem] font-bold text-3xl italic leading-10'>
        Galleria D'Immagini
      </h1>

      {currentUser ? (
        <Link
          className='text-xl hover:underline'
          onClick={() => auth.signOut()}
        >
          <button>Sign out</button>
        </Link>
      ) : (
        <Link to='/signin' className='text-xl hover:underline'>
          Sign In
        </Link>
      )}
    </header>
  );
};

export default Header;
