import { SearchOutlined } from "@mui/icons-material";
import ImageBox from "./ImageBox";
import imgData from "../data";

const MainContent = ({ userLoggedIn }) => {
  const imgElements = imgData.map((data) => (
    <ImageBox key={data.id} id={data.id} src={data.src} tags={data.tags} />
  ));

  return (
    <main className='grid gap-4 p-4 max-w-[120rem] mx-auto'>
      <div className='relative max-w-[50%]'>
        <input
          type='text'
          placeholder='Search images using tags'
          className='w-full p-2 pr-10 border rounded-full text-base'
        />
        <button className='absolute top-1/2 right-2 translate-y-[-50%]'>
          <SearchOutlined fontSize='large' />
        </button>
      </div>

      <div className='mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {imgElements}
      </div>
    </main>
  );
};

export default MainContent;
