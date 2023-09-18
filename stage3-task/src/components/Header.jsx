const Header = () => {
  return (
    <header className='flex justify-between p-4 py-7'>
      <h1 className='w-[10rem] font-bold text-3xl italic leading-10'>
        Galleria D'Immagini
      </h1>
      <button className='text-xl hover:underline'>Sign In</button>
    </header>
  );
};

export default Header;
