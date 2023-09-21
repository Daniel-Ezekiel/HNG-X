import { Close, SearchOutlined } from "@mui/icons-material";
import ImageBox from "./ImageBox";
import imgData from "../data";
import { useState } from "react";

const MainContent = ({ userLoggedIn }) => {
  const [allImages, setAllImages] = useState(imgData);
  const [searchVal, setSearchVal] = useState("");
  const [searchTags, setSearchTags] = useState([]);

  const handleSearch = () => {
    const uniqueTags = [...new Set(searchTags), searchVal.trim().toLowerCase()];
    setSearchTags([...new Set(uniqueTags)]);
    setSearchVal("");
  };

  const removeTag = (event) => {
    event.preventDefault();
    const tagName = event.target.closest("span").textContent.trim();
    const newSearchTags = searchTags.filter((tag) => tag !== tagName);
    setSearchTags(newSearchTags);
  };

  const imgElements = searchTags.length
    ? allImages
        .filter((data) => data.tags.some((tag) => searchTags.includes(tag)))
        .map((data) => (
          <ImageBox
            key={data.id}
            id={data.id}
            src={data.src}
            tags={data.tags}
          />
        ))
    : allImages.map((data) => (
        <ImageBox key={data.id} id={data.id} src={data.src} tags={data.tags} />
      ));

  const tagElements = searchTags.map((tag, i) =>
    tag ? (
      <span
        key={i}
        className='flex justify-center items-center text-base px-2 py-1 border rounded-full'
      >
        {tag}
        <button
          type='button'
          className='flex justify-center items-center ml-2 p-2 w-3 h-3 rounded-full border'
          onClick={removeTag}
        >
          <Close />
        </button>
      </span>
    ) : null
  );
  // console.log(tagElements);

  return (
    <main className='grid gap-4 p-4 max-w-[120rem] mx-auto'>
      <div className='relative md:max-w-[50%]'>
        <input
          type='text'
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder='Search images using tags'
          className='w-full p-2 pl-4 pr-10 border rounded-full text-base'
        />
        <button
          className='absolute top-[50%] right-2 translate-y-[-50%]'
          onClick={handleSearch}
        >
          <SearchOutlined fontSize='large' />
        </button>
      </div>

      <div className='flex flex-wrap gap-3'>{tagElements}</div>

      <div className='mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {imgElements.length ? (
          imgElements
        ) : (
          <p className='text-base text-center'>
            Sorry, your search did not give any results.
          </p>
        )}
      </div>
    </main>
  );
};

export default MainContent;
