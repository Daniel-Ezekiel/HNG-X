import { useEffect, useRef, useState } from "react";
import { Close, SearchOutlined } from "@mui/icons-material";
import ImageBox from "./ImageBox";
import imgData from "../data";
import { CircleLoader } from "react-spinners";

const MainContent = ({ userLoggedIn }) => {
  const [allImages, setAllImages] = useState(imgData);
  const [searchVal, setSearchVal] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dragImage = useRef(0);
  const draggedOverImage = useRef(0);

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

  const handleSort = () => {
    const allImagesClone = [...allImages];
    const temp = allImagesClone[dragImage.current];
    allImagesClone[dragImage.current] =
      allImagesClone[draggedOverImage.current];
    allImagesClone[draggedOverImage.current] = temp;

    setAllImages(allImagesClone);
  };

  const imgElements = allImages.map((data, i) => (
    <ImageBox
      key={i}
      id={data.id}
      src={data.src}
      tags={data.tags}
      orientation={data.type}
      handleDragStart={() => (dragImage.current = i)}
      handleDragEnter={() => (draggedOverImage.current = i)}
      handleDragEnd={handleSort}
      handleDragOver={(event) => event.preventDefault()}
      updateSearchTags={(event) => {
        event.preventDefault();
        const tag = event.target.textContent.trim();

        if (searchTags.includes(tag)) return;
        setSearchTags((prevTags) => [...prevTags, tag]);
      }}
    />
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

  useEffect(() => {
    setIsLoading(true);
    if (searchTags.length) {
      const newImgArr = imgData.filter((data) =>
        data.tags.some((tag) => searchTags.includes(tag))
      );
      setAllImages(newImgArr);
    } else {
      setAllImages(imgData);
    }

    setTimeout(() => setIsLoading(false), 1000);
  }, [searchTags]);

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

      {isLoading ? (
        <CircleLoader className='mx-auto' />
      ) : (
        <div className='mt-5 grid gap-4 grid-cols-2 grid-flow-dense md:grid-cols-3 lg:grid-cols-4'>
          {imgElements.length ? (
            imgElements
          ) : (
            <p className='col-span-full text-base text-center'>
              Sorry, your search did not give any results.
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default MainContent;
