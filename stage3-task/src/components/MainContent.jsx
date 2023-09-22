import { Close, Mouse, SearchOutlined } from "@mui/icons-material";
import imgData from "../data";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const MainContent = ({ userLoggedIn }) => {
  const [allImages, setAllImages] = useState(imgData);
  const [searchVal, setSearchVal] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // const imgElements = allImages.map((data, i) => (
  //   <SortableItem key={data.id} item={data} />
  // ));

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

  const addSearchTag = (event) => {
    const tagName = event.target.textContent.trim();
    if (searchTags.includes(tagName)) return;
    setSearchTags((prevTags) => [...prevTags, tagName]);
  };

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 100,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragEnd = (event) => {
    // console.log(event);
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }

    setAllImages((images) => {
      console.log(images[0].id);
      const oldIndex = images.findIndex((image) => image.id == active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);

      return arrayMove(images, oldIndex, newIndex);
    });
  };

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

    setTimeout(() => setIsLoading(false), 2000);
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
        <CircleLoader className='mx-auto text-rose' color='#be123c' />
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={allImages} strategy={rectSortingStrategy}>
            <div className='mt-5 grid gap-4 grid-cols-2 grid-flow-dense md:grid-cols-3 lg:grid-cols-4'>
              {allImages?.length ? (
                allImages?.map((data) => (
                  <SortableItem
                    key={data.id}
                    item={data}
                    updateSearchTags={addSearchTag}
                  />
                ))
              ) : (
                <p className='text-base text-center'>
                  Sorry, your search did not give any results.
                </p>
              )}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </main>
  );
};

export default MainContent;
