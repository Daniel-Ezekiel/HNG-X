import { SearchOutlined } from "@mui/icons-material";

function App() {
  return (
    <>
      <header className='flex justify-between p-4 leading-7'>
        <h1 className='font-bold w-[10rem] text-xl italic '>
          Galleria D'Imaggini
        </h1>
        <button className=' hover:underline'>Sign In</button>
      </header>
      <main className='grid gap-4 p-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search images using tags'
            className='w-full p-1 pr-5 border rounded-md'
          />
          <button className='absolute top-1/2 right-1 translate-y-[-50%]'>
            <SearchOutlined />
          </button>
        </div>

        <div className='mt-5'>
          <div className='relative rounded-xl overflow-hidden shadow-2xl cursor-grab'>
            <img
              src='./src/assets/images/10.jpg'
              alt=''
              className='object-cover scale-110 hover:scale-100 transition-all duration-500 ease-in-out'
            />
            <div className='absolute flex gap-2 left-2 bottom-2'>
              <span className='px-2 py-1 bg-[rgba(255,255,255,0.7)] rounded-full text-sm'>
                football
              </span>
              <span className='px-2 py-1 bg-[rgba(255,255,255,0.7)] rounded-full text-sm'>
                wallpaper
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

