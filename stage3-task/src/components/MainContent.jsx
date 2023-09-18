import { SearchOutlined } from "@mui/icons-material";
import ImageBox from "./ImageBox";
import imgData from "../data";

const MainContent = () => {
  const imgElements = imgData.map((data) => (
    <ImageBox key={data.id} src={data.src} tags={data.tags} />
  ));

  return (
    <main className='grid gap-4 p-4'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search images using tags'
          className='w-full p-2 pr-10 border rounded-full text-base'
        />
        <button className='absolute top-1/2 right-2 translate-y-[-50%]'>
          <SearchOutlined fontSize='large' />
        </button>
      </div>

      <div className='mt-5 grid gap-4'>{imgElements}</div>
    </main>
  );
};

export default MainContent;
