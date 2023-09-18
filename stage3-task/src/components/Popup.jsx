import { Close } from "@mui/icons-material";

const Popup = ({ handlePopupClose }) => {
  return (
    <>
      <div className='before:absolute before:top-[0] before:w-full before:h-full before:bg-[rgba(0,0,0,0.65)] before:backdrop-blur-sm transition-all duration-[5000ms] ease-in-out'></div>
      <div className='fixed grid gap-2 p-[4rem] py-[6rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%] bg-white shadow-md text-center max-w-[45rem] transition-all duration-500 ease-in-out'>
        <p className='text-xl'>Get full access to the features right away!</p>
        <h2 className='font-bold text-2xl'>Login to your account</h2>
        <div className='grid gap-4 mt-4'>
          <input
            type='email'
            name='email'
            placeholder='johndoe@example.com'
            className='text-xl border p-2 px-4 rounded-full text-dark-gray placeholder:text-dark-gray'
          />
          <input
            type='password'
            name='password'
            placeholder='........'
            className='text-xl border p-2 px-4 rounded-full text-dark-gray placeholder:text-dark-gray'
          />
          <button
            type='button'
            className='p-2  rounded-full bg-rose font-bold text-xl text-white hover:scale-105'
          >
            Login
          </button>
        </div>
        <button
          className='absolute top-2 right-2 p-1 w-7 h-7 flex items-center justify-center rounded-full '
          onClick={handlePopupClose}
        >
          <Close fontSize='large' />
        </button>
      </div>
    </>
  );
};

export default Popup;
