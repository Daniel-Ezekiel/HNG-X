import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
// import { Auth } from "firebase/auth";

const Header = ({ currentUser }) => {
  const navigate = useNavigate();

  return (
    <header className='flex justify-between p-4 py-7 max-w-[120rem] mx-auto'>
      <h1 className='w-[fit-content] font-bold text-xl md:text-3xl italic leading-10 md:max-w-[20rem]'>
        Galleria D'Immagini
      </h1>

      {currentUser ? (
        <p className='text-base text-right md:text-xl'>
          Signed in ({currentUser}){" "}
          <button
            type='button'
            className='md:text-xl bg-rose p-1 px-2 rounded-full text-white hover:underline'
            onClick={() => {
              auth.signOut();
              navigate("/");
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <Link to='/' className='text-xl hover:underline'>
          <button
            type='button'
            className='text-xl bg-rose p-1 px-2 rounded-full text-white hover:underline'
          >
            Sign in
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
