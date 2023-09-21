const Tag = ({ tagVal, updateSearchTag }) => {
  return (
    <span
      className='px-2 py-1 bg-[rgba(255,255,255,0.7)] rounded-full  font-bold text-sm transition-all ease-in-out duration-500  hover:underline hover:scale-105 hover:bg-rose hover:text-white'
      onClick={updateSearchTag}
    >
      {tagVal}
    </span>
  );
};

export default Tag;
